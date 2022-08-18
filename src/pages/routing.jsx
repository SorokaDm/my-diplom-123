import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Routing = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://my-diplom-123.herokuapp.com/api/get/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    return(
        <div>
            {post && (
                <>
                    <h1>{post.text}</h1>
                    <p>{post.id}</p>
                </>
            )}
        </div>
    )
}

export {Routing}