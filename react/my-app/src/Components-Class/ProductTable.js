import React from "react";
class ProductTable extends React.Component {
    render() {
        let value = 100;
        let products = [
            {
                productName: "Mouse",
                productQty: 3,
                productPrice: 800,
            },
            {
                productName: "Keyboard",
                productQty: 5,
                productPrice: 1300,
            }, {
                productName: "Stylus",
                productQty: 2,
                productPrice: 1000,
            }, {
                productName: "Charger",
                productQty: 7,
                productPrice: 1800,
            },
        ];

        const person = {
            firstName: "abc",
            lastName: "xyz"
        }


        function displayPerson(){
            return person.firstName + person.lastName
        }

        return (
            <div>
                <h1>{value}</h1>

                <p>Person - firstName: {person.firstName} lastName: {person.lastName}</p>
                <p>{displayPerson()}</p>
                <table style={{ border: "1px solid black" }}>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Qty</th>
                        <th>Product Prize</th>
                    </tr>

                    {products.map((item) => (
                        <tr>
                            <td>{item.productName}</td>
                            <td>{item.productQty}</td>
                            <td>{item.productPrice}</td>
                        </tr>

                    ))}
                </table>
            </div>
        )
    }
}
export default ProductTable