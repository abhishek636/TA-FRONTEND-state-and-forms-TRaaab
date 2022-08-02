import React,{Component} from "react";


class App extends Component{
    state={
        shipping:{
            address:"",
            zipcode:"",
            city:"",
            country:""
        },
        billing:{
            address:"",
            zipcode:"",
            city:"",
            country:""
        },
        isSame:false
    }
 
   
    handleShipping=({target})=>{
    let {name,value}=target;
        this.setState(state => ({
            shipping: { ...state.shipping , [name]: value }
        }));
    }
    handleCheck=()=>{
        this.setState(state => ({
            isSame:!state.isSame
        }));
    }



    render(){

        let {isSame,shipping,billing}=this.state;
        let billingdata=isSame?shipping:billing
        return(

            <main>
            
                <header>
                    <h1>📑 Learning About Forms</h1>
                    <p>Shipping And Billing Address</p>
                </header>

                <section>
                    
                 
                    <form>
                        <h3>Shipping Address</h3>
                
                        <label htmlFor="add">Adress</label>
                        <input onChange={this.handleShipping} id="add" type="text" name="address" placeholder="e.g Khaniyara"/>
                    
                        <label htmlFor="pin1">ZIP/Postal Code</label>
                        <input onChange={this.handleShipping} id="pin1" type="text" name="zipcode" placeholder="e.g 176218"/>
                    
                        <label htmlFor="city1">City</label>
                        <input onChange={this.handleShipping} id="city1" type="text" name="city" placeholder="e.g Kangra"/>
                    
                        <label htmlFor="country1">Country</label>
                        <input onChange={this.handleShipping} id="country1" type="text" name="country" placeholder="e.g India"/>
                    
                    </form>
                    
                    <form>
                        <h3>Billing Address</h3>
                        
                        <input  type="checkbox" onClick={this.handleCheck}/>
                        <span>Same as the Shipping Adress?</span> <br></br>
                    
                    
                        <label htmlFor="add2">Adress</label>
                        <input defaultValue={billingdata.address} id="add2" type="text" name="adress" placeholder="e.g Khaniyara"/>

                        <label htmlFor="pin2">ZIP/Postal Code</label>
                        <input defaultValue={billingdata.zipcode} id="pin2" type="text" name="zipcode" placeholder="e.g 176218"/>

                        <label htmlFor="city2">City</label>
                        <input defaultValue={billingdata.city} id="city2" type="text" name="city" placeholder="e.g Kangra"/>

                        <label htmlFor="country2">Country</label>
                        <input defaultValue={billingdata.country} id="country2" type="text" name="country" placeholder="e.g India"/>

                    </form>
                    
                </section>
            </main>
        )
    }
}

export default App;