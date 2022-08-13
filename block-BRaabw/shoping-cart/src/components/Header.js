import React from "react";

function Header(props){
    var {productsData, filterbyprice}=props
    return (
        <>
            <header className="flex">
                <div className="product-count">
                <h3>{productsData.length} product found</h3>
                </div>
                <div className="price-filters">
                    <select
                        className="drop-down-container"
                        value="filter by price"
                        name="priceoption"
                        onChange={ filterbyprice}
                    >
                        <option>Sort</option>
                        <option value="increment">low to high</option>
                        <option value="decrement">high to low</option>
                    </select>
                </div>
            </header>
        </>
    );
}

export default Header;