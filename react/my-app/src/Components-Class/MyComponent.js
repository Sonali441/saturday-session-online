import React from "react"
import ProductBody from "./ProductBody";
class Mycomponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Products Component</h1>
                
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Qty</th>
                        <th>Product price</th>
                    </tr>

                    <ProductBody products={this.props.products}/>
                </table>

                <h1>{this.props.countValue}</h1>
            </div>
        )
    }
}
export default Mycomponent