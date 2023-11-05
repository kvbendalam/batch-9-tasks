import React from 'react'

function Cart(props) {
    console.log(props)
    var total = 0;

    props.data.map((product) => {
        return (
            total = total + product.data.price
        )
    })

    return (
        <div className="row">
            {props.data.map((cartItem) => {
                return (
                    <div className="col-sm-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src={cartItem.data.img} class="card-img-top" alt="..." style={{ height: "100px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{cartItem.data.names}</h5>
                                <p className="card-text">{cartItem.data.desc}</p>
                                <p className="card-text">{cartItem.data.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <p>Total cost of your item is : {total}</p>
        </div>
    )
}

export default Cart