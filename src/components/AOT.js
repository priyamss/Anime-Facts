import React, { useEffect, useState } from 'react'
import Card from './Card'

const AOT = () => {

    const [facts, setFacts] = useState([])

    const fetchAOT = () => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/attack_on_titan")
            .then(response => response.json())
            .then(data => {
                setFacts(data.data)
            })
    }

    useEffect(() => {
        fetchAOT();
    })

    return (
        <div className='container'>
            <h1>Attack ON Titans</h1>
            {facts && facts.map((facts) => {
               return (
                    <Card key={ facts.id } fact_id={facts.fact_id} fact={facts.fact}/>
               )
            })}
        </div>
    )
}

export default AOT
