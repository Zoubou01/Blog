//CUSTOM HOOK
import {useState , useEffect} from 'react';

const useFetch = (url) => {
    const [blogs,setBlogs] = useState([]); 
    const [isPending, setIsPending] = useState(true);

    const getRequest = async () => {
        const response = await fetch(url);
        let responseJson;
        try{
            responseJson = await response.json();
            setBlogs(responseJson);
            setIsPending(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRequest();
    },[url]);
    return { blogs, isPending };
}

export default useFetch;