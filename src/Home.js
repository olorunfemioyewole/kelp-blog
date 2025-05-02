//import { useEffect, useState } from "react";//hooks
import BlogList from "./BlogList";//component
import err from "./err.png";//importing resource
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:5010/blogs');
    /*
        Start server with command: npx json-server --watch db.json --port 5010
    */

    return ( 
        <div className="home">
            {error && <div className="error"><img src={err} alt="error"/>{error}</div>}
            {isPending && <div className="loading">loading...</div>}
            {blogs && <BlogList blogs={blogs} title = "All Blogs"/>}
            {/*sending blogs and title as props to the blogslist component */}
        </div>
     );
}
 
export default Home;