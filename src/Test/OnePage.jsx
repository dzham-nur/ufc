import { useState, useEffect } from "react";
import ton from "../assets/images/UFC 306.png"
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function OnePage() {
    const { id } = useParams();
    const [category, setCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://f09d35faa02ad613.mokky.dev/post`);
                const filteredPosts = response.data.filter(post => post.category === id);
                setPosts(filteredPosts);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        async function fetchCategory() {
            try {
                const response = await axios.get(`https://f09d35faa02ad613.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts();
        fetchCategory();
    }, [id]);

    if (isError) {
        return <div>Error loading data...</div>;
    }

    return (
        <section class="mobile-block">
            <div class="mobile-block_header is-secondary">
                <img src={ton} alt="Category banner"/>
            </div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                posts.map((post) => (
                    <Link to={`/post/${post.id}`} class="all-news-block" key={post.id}>
                        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${post.imageUrl})`, backgroundSize:'cover', backgroundPosition:'center'}} class="news-card">
                            <div class="container">
                                <h3 class="news-card__title">{post.title}</h3>
                                <span class="news-card__date">{post.date}</span>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </section>
    );
}

export default OnePage;
