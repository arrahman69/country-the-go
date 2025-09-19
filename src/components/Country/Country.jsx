import React from 'react'

const Country = ({country}) => {
   console.log(country.region.region);

   function handleShow(){
    alert(
            country.name.official+ ' ' +country.region.region
    )
    
   }
  return (
    <>
    <div className='l-abba'><img src= { country.flags.flags.png} alt = {country.flags.flags.alt} />
    <h1>Name :  {country.name.common}</h1>
    <p className='card'>Population : {country.population.population}</p>
    {country.population.population >5000000 ? <p>Biggest Country</p> : <p>Small Country</p>}
    <button onClick={handleShow}>SHOW NOW</button>
</div>
    </>
  )
}

export default Country