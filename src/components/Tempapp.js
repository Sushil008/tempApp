import React from "react";
import './css/styles.css';
const Tempapp = () => {
    return(
        <>
            <div className="box">
            <div className="inputData">
                <input type="search"  
                className="inputField"
                onChange={ (event) => {

                }}
                />
            </div>
            </div>

            <div className="info">
                <h2 className="location">
                    <i class="fas fa-street-view">Pokhara</i>
                </h2>
                <h1 className="temp">
                    5.25 °C
                    <h3 className="tempmin_max">Min: 5.25 °C Max: 5.25 °C </h3>     
                </h1>
                
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
        
        </>
    )

}
export default Tempapp;