import React , {useEffect, useState}from 'react'
import Card from './Card'

const Naruto = () => {

    const [facts, setFacts] = useState([])

    const fetchNaruto = () => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/naruto")
            .then(response => response.json())
            .then(data => {
                setFacts(data.data)
            })
    }

    useEffect(() => {
        fetchNaruto();
    })

    return (
        <div className='container'>
            <h1>Naruto Shippunden</h1>
            {facts.map((facts) => {
                return(
                  <Card key={facts.id} fact_id={facts.fact_id} fact={facts.fact}/>
                )
            })}
        </div>
    )
}

export default Naruto
