import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
    	<ul class="list-group">
    		<li class="list-group-item">
            ${
                posts.map(posts => {
                    return(PostItem(posts));
                }).join('')
            }
            </li>
        </ul>
    `);
}
export default PostList;


            // <div class="wd-head-image">
            //   <img src="starship.jpg" class="wd-topic-heading-image">
            // <div class="wd-img-text">SpaceX's Starship</div>
            // </div>