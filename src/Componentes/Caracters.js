import axios from "axios";
import { useEffect, useState } from "react";
import "./Caracters.css";
export default function Caracters(){
    const [name, setName] = useState([]);
    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/characters").then(res=>
        setName(res.data))
    });
    return(
        <div className="card">
            {
                name.map((data) => {
                    if(data.image != ""){
                        return(
                            <div className="card-item">
                                
                                <section>
                                    <h2>{data.name}</h2>
                                    <div className="info">
                                        <h3><b>Actor: </b> {data.actor}</h3>
                                        <h3><b>Patronus:</b> {data.patronus}</h3>
                                        <h3><b>Species:</b> {data.species}</h3>
                                        <h3><b>Gender:</b> {data.gender}</h3>
                                        {data.alive ? (
                                            <h3><b>Alive: </b>Live</h3>
                                        ) : (
                                            <h3><b>Alive: </b>Dead</h3>
                                        )}
                                    </div>
                                </section>
                                
                                <img src={data.image}/>
                                <div className="shadow"></div>
                            </div>
                        )
                    }
                })}
        </div>
    )
}