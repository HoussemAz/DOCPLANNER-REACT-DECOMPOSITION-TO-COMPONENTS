import React from 'react'

export default function star(props) {
    return (
    <div>
        <div className='stats'>
             <div className="platform">
            <h1>The world's<br/>biggest healthcare platform </h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        </div>
        <div className='stat-bord'>
            {props.stat.map(el=>
               <div className='flag'>
                <img src={el.svg}/>
                <h3>{el.titel}</h3>
                <p>{el.text}</p>
            </div>
                )}
        </div>
       
        </div>
         <div className='header-office'>
            <h1>Improve the lives of millions.<br/>Change yours forever</h1>
            <p>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops.</p>
        </div>
        </div>
    )
}
