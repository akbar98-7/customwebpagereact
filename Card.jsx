import React from 'react'

const Card = ({item}) => {
    return (
        <div>
            <div className="card">
                <img src={item?.img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.subtitle}</h5>
                    <p className="card-text">{item.subtitle}</p>
                    <a href={item.button} className="btn btn-primary">{item.button}</a>
                </div>
            </div>
        </div>
    )
}

export default Card
