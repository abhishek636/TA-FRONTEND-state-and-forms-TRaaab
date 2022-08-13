import React, { Component } from "react";
import ReactScroll from 'react-custom-scrollbars-2';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  openCart = () => {
    this.setState({
      isOpened: true,
    });
  };

  closeCart = () => {
    this.setState({
      isOpened: false,
    });
  };

  render() {
    let { userCart, totalAmount, removeProductFromCart } = this.props;
    let cartOpened = this.state.isOpened;
    if (!cartOpened) {
      return <CloseCart openCart={this.openCart} userCart= {userCart}/>;
    }
    if (cartOpened) {
      return (
        <div className="usercart-container">
        {/* button to close this cart  */}

        <button className="close-cart" onClick={this.closeCart}>❌</button>
          <header>
            <figure>
              <img alt="bag" src="static/bag-icon.png"></img>
              <span id="product-count">{userCart.length}</span>
            </figure>
            <span>Cart</span>
          </header>
          <div className="box">
            <ReactScroll>
              {userCart.map((product) => {
                totalAmount += product.price;
                return (
                  <div className="cart-con">
                    <div>
                      <div className="flex-row justify-bw">
                        <figure className="flex-30">
                          <img src={"/static/images/" + product.sku + "_2.jpg"}></img>
                        </figure>
                        <div className="flex-70 cart">
                          <h2>{product.title}</h2>
                          <p>Price: {product.price} $</p>
                          <button className="del-B" id={product.id} onClick={removeProductFromCart}>x</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ReactScroll>
          </div>
          <div className="total-amount-container flex-row">
            <h4>subtotal : </h4>
            <span>{totalAmount} $</span>
          </div>

          <button className="checkout">checkout</button>
        </div>
      );
    }
  }
}

function CloseCart(props) {
  let {openCart , userCart} = props;
  return (
    <>
      <div className="cartopener" onClick={openCart}>
        <header>
          <figure>
            <img alt="bag" src="static/bag-icon.png"></img>
            <span id="product-count">{userCart.length}</span>
          </figure>
        </header>
      </div>
    </>
  );
}

export default Cart;