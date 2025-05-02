import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import err from "./err.png";//importing resource

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch("http://localhost:5010/blogs/"+id); //getting the exact blog needed from the fetch by adding the id
    
    const history = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:5010/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(() => {
            history('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div className="loading">loading...</div>}
            {error && <div className="error"><img src={err} alt="error"/>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;