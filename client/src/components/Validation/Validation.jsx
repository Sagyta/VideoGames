
export default function Validation (game){
  
    let errors ={}

    if(!game.name){
        errors.name = 'Nombre es requerido'
    }else{
        if(game.name.trim()==='' || game.name.length<3 || game.name.length>16){
            errors.name = 'El nombre es invalido'
        }
    }

    if(!game.description || game.description.trim() === ''){
        errors.description = 'Debe colocar una descripcion'
    }else{
        if(game.description.length<1 || game.description.length>250){
            errors.description ='La descripcion debe tener un minimo de 3 caracteres y un maximo de 250 caracteres'
        }
    }

    if(!game.released || game.released.trim() === ''){
        errors.released = 'Este campo es requerido'
    }

    if(!game.platforms.length === 0){
        errors.platforms = 'Este campo es requerido'
    }else{
        if(game.platforms.length>5){
            errors.platforms = 'el maximo es 5'
        }
    }

    if(!game.rating){
        errors.rating = 'Debe seleccionar un rating'
    }else{
        if(game.rating<1 || game.rating>5){
            errors.rating = 'El Rating va de 1 a 5'
        }
    }

    if(game.genres.length === 0){
        errors.genres = 'Debe seleccionar al menos un genero'
    }else{
        if(game.genres.length>3){
            errors.genres = 'Solo puede seleccionar 3 generos como maximo'
        }
    }
    return errors
}
