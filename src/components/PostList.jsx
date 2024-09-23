import {useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "../components/Error";

function PostList() {


    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://f09d35faa02ad613.mokky.dev/post');
                setPosts(response.data); 
            } catch(error) {
                setIsError(true)
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();

    }, []);


    if (isError) {
        return <Error />
    }





    return (
        <div class="post-detail-block">
            {isLoading ? (<LoadingPost />) : (
                <div class="post-detail-block">
                    {posts.map((post) =>
                    <PostCard key={post.id} post={post} />
                    )}
                </div>
            )}
        </div>
    );
}

export default PostList;