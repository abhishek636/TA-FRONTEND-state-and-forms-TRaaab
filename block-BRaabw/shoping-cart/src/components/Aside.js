import React from "react";
function Aside(props){
    var {handleSizeFilter} = props;
    return(
        <>
            
            <div className="buttons flex-30">
                <h2 className="aside-heading">SIZES:</h2>
                <div>
                    <button  onClick={handleSizeFilter}>X</button>
                    <button  onClick={handleSizeFilter}>XS</button>
                    <button  onClick={handleSizeFilter}>S</button>
                    <button  onClick={handleSizeFilter}>M</button>
                    <button  onClick={handleSizeFilter}>L</button>
                    <button  onClick={handleSizeFilter}>XL</button>
                    <button  onClick={handleSizeFilter}>XXL</button>
                </div>
            </div>
        </>
    )

}

export default Aside;