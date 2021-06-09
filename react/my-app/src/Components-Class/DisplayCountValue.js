import React from 'react'

 function DisplayCountValue(props) {
    return (
        <div style={{border:"2px solid red"}}>
            <h1>{props.countValue}</h1>
        </div>
    )
}
export default DisplayCountValue