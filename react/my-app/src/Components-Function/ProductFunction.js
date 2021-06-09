import DisplayCourses from "./DisplayCourses";

function ProductFunction() {
    let skillslist = [
        "HTML",
        "CSS",
        "Javascript",
        "React JS",
        "Java",
    ];

    let courses= ["Data Science", "Python", "React"];
    return(
        <div>
            <h1>List your skills:</h1>
            <ul>
                {skillslist.map((item)=>
                (<li>{item}</li>
                ))}
            </ul>

            <DisplayCourses courses={courses}/>
        </div>
    )
}

export default ProductFunction;