import {subirImagen} from  './http-provider' 
 
const body = document.body;

let inputFile, imgFoto,ruta_server;



const crearInputFile = ()=>{
    const html =
    `
        <h1 class="mt-5">Subir Archivos </h1> 
        <hr>
        <label>Selecciona Una imagen :</label>
        <input type="file" accept="image/png, image/jpg"/>
        <br>
        <img id="foto" class="img-thumbnail" scr="">
        <h2 id="ruta_server" style="font-size:16px"></h2>

    `;

    const div= document.createElement('div');
    div.innerHTML=html;
    body.append(div);
    inputFile=document.querySelector('input');
    imgFoto=document.querySelector('#foto');
    ruta_server=document.querySelector('#ruta_server');


}

const eventos = () =>{
 inputFile.addEventListener('change',(event)=>{
    const file = event.target.files[0];
    //console.log(file);
    subirImagen(file).then (url=>imgFoto.src = url);
    subirImagen(file).then (url=>ruta_server.innerHTML = url);
});
}


export const init =()=>{
    crearInputFile();
    eventos();
}