import React from "react";
import Data from "../data"
import Aside from "./Aside"
import Product from "./Product"
import Header from "./Header";
import Cart from "./Cart";  

var productsData=[]

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      sizeFilters: {
        S: false,
        XS: false,
        M: false,
        L: false,
        XL: false,
        XXl: false,
      },
      userCart: {
        productsId: [],
      },
      displayallProducts: true,
    };
  }

  handleSizeFilter=(event)=>{
    event.preventDefault();

    this.setState({
      displayallProducts:false
    })
    let newArray=[];
    Data.products.map((A) => {
      if(A.availableSizes.includes(event.target.innerText) === true){
        newArray.push(A)
      }
      return newArray;
    })
    productsData = newArray
  }

  //  to  add a product to user cart
  addproductToCart = ({ target }) => {
    let { id } = target;
    let productsIdArr = this.state.userCart.productsId;
    productsIdArr.push(Number(id));
    this.setState({
      userCart: {
        productsId: productsIdArr,
      },
    });
  };

    // remove a product from the user cart
    removeProductFromCart = ({ target }) => {
      let { id } = target;
      let productsIdArr = this.state.userCart.productsId;
      productsIdArr = productsIdArr.filter((ele) => ele != id);
      this.setState({
        userCart: {
          productsId: productsIdArr,
        },
      });
    };

  // method to get all the user cart product
  getCartProduct = () => {
    let allproductsId = this.state.userCart.productsId;
    let allCartProducts = Data.products.filter((product) => {
      if (allproductsId.includes(product.id)) {
        return product;
      }
      
    });
    return allCartProducts;
  };




  filterbyprice = ({ target }) => {
    // change displayallProdcts  to false to show the filtered products
    this.setState({
      displayallProducts: false,
    });

    let { value } = target;
    let productsdata = [...productsData];
    if (value === "decrement") {
      productsData = productsdata.sort((a, b) => b.price - a.price);
    }
    if (value === "increment") {
      productsData = productsdata.sort((a, b) => a.price - b.price);
    }
  };

  render(){
    let userCart = this.getCartProduct();
    let totalAmount = 0;
    return(
        <>
          <main className="container">
              <div className="flex">
                  <Aside

                    handleSizeFilter={this.handleSizeFilter}
                    
                  />

                  <div className="flex-70 margin">
                      <Header
                        filterbyprice={this.filterbyprice}
                        productsData={
                            this.state.displayallProducts === true
                              ? Data.products
                              : productsData
                        }
                      />
                      <Product
                          productsData={
                            this.state.displayallProducts === true
                              ? Data.products
                              : productsData
                        }
                        addproductToCart={this.addproductToCart}
                      />
                  </div>
                  <Cart
                    userCart={userCart}
                    totalAmount={totalAmount}
                    removeProductFromCart={this.removeProductFromCart}
                  />
              </div>
          </main>
      </>
    )
  }
}

export default App;