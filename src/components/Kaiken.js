import React , {useEffect, useState} from 'react'
import Card from "./Card"

const Kaiken = () => {

    const [facts, setFacts] = useState([])

    const fetchKaiken = () => {
        fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/jujutsu_kaisen")
            .then(response => response.json())
            .then(data => {
                setFacts(data.data)
            })
    }

    useEffect(() => {
        fetchKaiken();
    })

    return (
        <div className='container'>
            <h1>Jujutsu Kaiken</h1>
            {facts.map((facts) => {
                return(
                    <Card key={facts.id} fact_id={facts.fact_id} fact={facts.fact}/>
            )
            })}
        </div>
    )
}

export default Kaiken
