import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostsList = () => {
    return(

    		<ul className="list-group">
    		<li className="list-group-item">
            <div className="wd-head-image">
              <img src="../images/starship.jpg" className="wd-topic-heading-image" alt = "Starship"/>
            <div className="wd-img-text">SpaceX's Starship</div>
            </div>
            </li>
            {
        posts.map(posts => {
            return(<PostSummaryItem post = {posts}/>);
        })
    }
        </ul>
    );
}
export default PostsList;