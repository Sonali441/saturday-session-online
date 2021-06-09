import React, { Component } from 'react'

export default class ProductBody extends Component {
    render() {
        return (
            <>
              {this.props.products.map((item)=>(
                  <tr>
                      <td>{item.productName}</td>
                      <td>{item.productQty}</td>
                      <td>{item.productPrice}</td>
                  </tr>
              ))}  
            </>
        )
    }
}
