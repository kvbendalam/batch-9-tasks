import React from 'react'

function Card(props) {
    return (
        <div className="row" style={{ margin: "3%" }}>
            {props.data.map((product) => {
                return (
                    <div className="col-sm-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src={product.img} class="card-img-top" alt="..." style={{ height: "100px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.names}</h5>
                                <p className="card-text">{product.desc}</p>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-primary" onClick={() => props.handleCartData(product)}>Add Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card