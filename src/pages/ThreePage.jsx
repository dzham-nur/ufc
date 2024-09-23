import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import back from "../assets/images/bb2 1.png";

function ThreePage() {
    const [tup, setTup] = useState([false]); 
    const [isError, setIsError] = useState(false);
    
    useEffect (() => {
        async function fetchTup() {
            try {

                const respons = await axios.get(`https://f09d35faa02ad613.mokky.dev/tup`);
                setTup (respons.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
           
        }
    }
        fetchTup();
    }, []);

    if (isError) {
        return <div>Error loading data...</div>;
    }

    return (
        <main>
    <section class="mobile-block">
        <div class="back-button">
            <Link to="/" class="container">
                <img src={back} alt="Back icon" />
                Назад
            </Link>
        </div>
        <div class="mobile-block_header is-success">
            <img src="../template/images/P4P.png" alt=""/>
        </div>
        <div class="all-news-block">
            <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${tup.imageUrl})`, backgroundSize:'cover', backgroundPosition:'center'}} class="r">
                <div class="container">
                    <h3 class="r__title">
                        {tup.title}


1.Jon Jone
2.Alexander Volkanovsk
3.Islam Makhache
4.Leon Edward
5.Aljamain Sterlin
6.Jon Ani
7.Pound for Poun 
8.Amanda Nune
9.Jiri Prochazk
10.Charles Oliveir
                    </h3>
                </div>
            </div>
        </div>
    </section>
</main>
    );
}

export default ThreePage;