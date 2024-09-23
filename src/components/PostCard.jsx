import { Link } from "react-router-dom";

function PostCard({post}) {
    return (
        <div>
            <Link style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${post.imageUrl})`, backgroundSize:'cover', backgroundPosition:'center'}} to={`/post/${post.id}`} class="News-card">
            <div class="container">
                    <h3 class="news-card__title">{post.title}</h3>
                    <span class="news-card__date">{post.date}</span>
                </div>
            </Link>
        </div>
    );
}

export default PostCard;