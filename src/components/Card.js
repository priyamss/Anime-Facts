import React from 'react'

const Card = ({ fact_id, fact }) => {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Fact { fact_id }</h5>
                    <p className="card-text">{ fact }</p>
                </div>
            </div>
        </div>
    )
}

export default Card