//const testUrl = 'https://api.chucknorris.io/jokes/random';
  const urlUser = 'https://reqres.in/api/users?page=2';
  const keyCloud = 'ifpgwnfy';
  const urlCloud = 'https://api.cloudinary.com/v1_1/dzpqjbw1l/upload';

const obtenerChiste = async() =>{
    try{
        const resp_liga = await fetch(testUrl);

        if(!resp_liga.ok) throw  'No se pudo realizar la petición a la liga';
        const {id,value}=await resp_liga.json();
        return {id,value};
    }catch (err){
        throw err;
    }

}


const obtenerUsers = async ()=>{
    const resp_users = await fetch(urlUser);
    const {data:usuarios}     = await resp_users.json();
    return usuarios;

}
 

/* fetch (testUrl).then ( resp =>{
    resp.json().then (data =>{
        console.log(data.id);
        console.log(data.value);
    });
}); */


/* fetch(testUrl).then (resp => resp.json()).then (({id,value})=>{
    console.log(id,value);
}); */


const subirImagen = async(archivoSubir) =>{
    const formData = new FormData();
    formData.append ('upload_preset',keyCloud );
    formData.append ('file', archivoSubir);
    try{
        const resp= await fetch (urlCloud,{
            method: 'POST',
            body: formData
        });
        if(resp.ok){
            const cloudResp = await resp.json();
            
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    }catch (err){
        throw err;
    }

}
export {

    obtenerChiste,
    obtenerUsers,
    subirImagen
}