import React from 'react';

const Country = (props) => {
    const {name,flag,capital,population}=props.country;
    return (
        <div style={{border:'2px solid white' ,width: '80%',margin:'10px'}}>
            <h1>{name}</h1>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <img style={{height:'200px'}} src={flag} alt=""/> <br/>
            <button onClick={()=>props.addCountryClick(props.country)} style={{marginBottom:'20px'}}>Add This Country</button>
        </div>
    );
};

export default Country;