import React, { useState, useEffect } from 'react'
import Card from './Card'

const OnePiece = () => {

    const [facts, setFacts] = useState([])

    const fetchOnePice = () => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece")
            .then(response => response.json())
            .then(data => {
                setFacts(data.data)
            })
    }

    useEffect(() => {
        fetchOnePice();
    })

    return (
        <div className='container'>
            <h1>One Piece</h1>
            {facts.map((facts) => {
                return(
                    <Card key={facts.id} fact_id={facts.fact_id} fact={facts.fact}/>
                )
            })}
        </div>
    )
}

export default OnePiece
