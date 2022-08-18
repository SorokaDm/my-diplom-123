import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const RoutPage = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`https://my-diplom-123.herokuapp.com/api/get`)
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return(
        <div>
            <h1>Our news</h1>
            {
                courses.map((courses) => <Link key={courses.id} to={`/get/${courses.id}`}>
                <li>{courses.text}</li>
            </Link>)
            }
        </div>
    )
}

export {RoutPage}