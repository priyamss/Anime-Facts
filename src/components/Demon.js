import React, { useEffect, useState } from 'react'
import Card from './Card'

const Demon = () => {

    const [facts, setFacts] = useState([])

    const fetchDemon = () => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer")
            .then(response => response.json())
            .then(data => {
                setFacts(data.data)
            })
    }

    useEffect(() => {
        fetchDemon();
    })

    return (
        <div className='container'>
            <h1>Demon Slayer</h1>
            {facts.map((facts) => {
                return (
                    <Card key={facts.id} fact_id={facts.fact_id} fact={facts.fact} />
                )
            })}
        </div>
    )
}

export default Demon
