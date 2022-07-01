import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';





const Homepage = () => {
    const {blogs, isPending} = useFetch( 'http://localhost:8000/blogs' ); //Custom Hook.
    return (
        <div className='Home'>
            { isPending && <div>Loading...</div> }
            <BlogList blogs={blogs}  />
            {/* {blogs && <BlogList blogs={blogs} />} */}
        </div>
    )
}


export default Homepage;