import React from "react";

function Product(props){
    var {productsData, addproductToCart}=props
   
    return(
       <>
            <div className="flex">
                {productsData.map((product) =>{
                    return(
                        <div className="product-card">
                            <figure>
                                <img alt="{product.title}" src={"/static/images/" + product.sku + "_1.jpg"} />
                                <span className="{product.isFreeShipping ? shipping-container : no}">
                                    {product.isFreeShipping ? "free shipping" : " "}
                                </span>
                            </figure>
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-price">
                            {product.price + product.currencyFormat}
                            </p>
                            <button
                            className="cart-button"
                            id={product.id}
                            onClick={addproductToCart}
                            >
                            Add To Cart
                            </button>
                        </div>
                    )
                })}
            </div>
       </>
    )
}

export default Product;