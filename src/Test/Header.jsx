import categoryIcon from "../assets/images/menu-btn.png"
import category2 from "../assets/images/ufc png 1 (1).png"
import category3 from "../assets/images/UFC-Heavyweight-Belt-PNG-File 1 (1).png"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

function Header() {
    const [categories, setCategories] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    useEffect (() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const respons = await axios.get('https://f09d35faa02ad613.mokky.dev/category');
                setCategories (respons.data);
            } catch(error) {
                console.log(error);
            }finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);
    
    return (
        <header class="header">
        <div class="container">
            <Link to={"/"} class="btn-category">
                <img src={categoryIcon} alt="Menu button" />
            </Link>
        </div>
        <section class="tournir">
                <div class="container">
                <Link to={"/Tournir"} class="tournir-button">
                    <img src={category2} alt="ufc b"/>
                </Link>    
            </div>
        </section>
        <section class="p4p">
                <div class="container">
                <Link to="/P4P" class="p4p-button">
                    <img src={category3} alt="ufc p4p"/>
                </Link>
            </div>
        </section>
    </header>
    );
}

export default Header;