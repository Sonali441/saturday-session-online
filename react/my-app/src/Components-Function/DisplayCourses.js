import React from 'react'

export default function DisplayCourses(props) {
    return (
        <div>
            {props.courses.map((course)=>(
                <li>{course}</li>
            ))}
        </div>
    )
}
