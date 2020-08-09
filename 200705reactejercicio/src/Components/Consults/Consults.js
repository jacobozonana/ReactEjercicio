import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";

function Consults() {
const [buscar, setBuscar] = useState('');
const [height, setHeight] = useState ('');
const [eyes, setEyes] = useState ('');
const [gen, setGen] = useState ('');
const [birth, setBirth] = useState ('');
const [name, setName] = useState ('');

useEffect(() => {

    getinfo ()

},[buscar])



    const URL =`https://swapi.dev/api/people/${buscar}/`

    const getinfo = () =>{
        axios.get (URL)
        .then((response) => {
           let nombre = response.data.name
           let altura = response.data.height
           let ojos = response.data.eye_color
           let genero = response.data.gender
           let cumple = response.data.birth_year
            setName(nombre)
            setHeight(altura)
            setEyes(ojos)
            setGen(genero)
            setBirth(cumple)

          
        })
        .catch((error) => {
            console.log(error);
        })

        };
        
    return (
        <div>
        <form onSubmit={getinfo}>
        <div className="table-success">


            
            <input 
            placeholder="Numero de Personaje" 
            
            onChange={(e)=>{
                setBuscar(e.target.value)
                        }} 
            />
           <button type="submit">Get Info</button>
            
            
            
            <h1>Nombre: {name}</h1>
            <h1>Altura: {height}</h1>
            <h1>Ojos: {eyes}</h1>
            <h1>Genero: {gen}</h1>
            <h1>Cumpleaños: {birth}</h1>






            
        </div>
        </form>
        </div>
    )
}

export default Consults
