import { obtenerChiste } from "./http-provider";

const body =document.body;
let boton_otro_chiste,chiste_principal;




const crearChistesHtml = () =>{
    const html =`
    <h1 class="mt-5">chistes </h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
        
    </ol>
    `;


    const divChistes =document.createElement('div');
    divChistes.innerHTML=html;

    body.append(divChistes);

}

const eventos = () =>{
    chiste_principal  = document.querySelector ('ol');
    boton_otro_chiste = document.querySelector ('button');

    boton_otro_chiste.addEventListener('click' ,async () =>{
        boton_otro_chiste.disabled =true;
        dibujarChiste(await obtenerChiste());
        boton_otro_chiste.disabled =false;
    });
}


const dibujarChiste = (chiste) =>{
    const olitem = document.createElement('li');
    olitem.innerHTML = `<b>${chiste.id}:${chiste.value}</b>`;
    olitem.classList.add('list-group-item');
    chiste_principal.append(olitem);
}









 export const init = ()=>{
    crearChistesHtml();
    eventos();
}