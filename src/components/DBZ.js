import React, { useEffect, useState } from 'react'
import "./Animes.css"
import Card from './Card'

const DBZ = () => {

    const [facts, setFacts] = useState([])

    const fetchDbz = () => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/dragon_ball")
            .then(response => response.json())
            .then(data => {
                setFacts(data.data)
            })
    }

    useEffect(() => {
        fetchDbz()
    })

    return (
        <div className='container'>
            <h1>Dragon Ball Z</h1>
            {facts && facts.map((facts) => {
                return(
                    <Card key={facts.id} fact_id={facts.fact_id} fact={facts.fact}/>
                )
            })}
        </div>
    )
}

export default DBZ
