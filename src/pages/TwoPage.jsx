import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import back from "../assets/images/bb2 1.png";

function TwoPage() {
    const { id } = useParams();
    const [loh, setPost] = useState([]);
    
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try {
               
                const response = await axios.get(`https://f09d35faa02ad613.mokky.dev/loh/${id}`);
                setPost(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
        }

        fetchPost();
    }, [id]);

    if (isError) {
        return <div>Error loading data...</div>;
    }



    return (
        <main>
    <section class="mobile-block">
        <div class="back-button">
            <Link class="container">
            <img src={back} alt="Back icon" />
                Назад
            </Link>
        </div>
         <div class="container">
            <div class="post-detail-block">
                <h3 class="news-card__title">
                    {loh.title}
                </h3>
                <span class="news-card__date">
                  {loh.date}
                </span>
                <p class="description">
                    {loh.description}
                </p>
                <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${loh.imageUrl})`, backgroundSize:'cover', backgroundPosition:'center'}} class="merab">
                </div>
            </div>
         </div>
    </section>
</main>
    );
}

export default TwoPage;