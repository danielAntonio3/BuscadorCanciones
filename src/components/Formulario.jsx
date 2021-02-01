import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({setRespuestaBusqueda}) => {

    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    });

    const [error,setError] = useState(false);

    //ontenemos los valores
    const {artista,cancion} = busqueda;

    // Funcion que actualiza el usestate de busqueda
    const realizarBusqueda = e=>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })


    };

    
    const buscarInformacion = e=>{
        e.preventDefault();

        // validamos
        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setRespuestaBusqueda(busqueda);

    };



    return (  
        <div className="bg-info">
            <div className="container">
            {error?<Error mensaje="Todos los campos son obligatorios"/> :null }
                <div className="row">
                    <form 
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador de letras de canciones</legend>        
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista o banda"
                                            onChange={realizarBusqueda}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la canción"
                                            onChange={realizarBusqueda}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>                        
                    </form>
                </div>
            </div>
        </div>
    );
}
 
Formulario.prototype={
    setRespuestaBusqueda: PropTypes.func.isRequired
}
export default Formulario;
