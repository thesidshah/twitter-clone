import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const WhoToFollowList = () => {
    return(`
    	<ul class="list-group">
    		<ul class="list-group">
    		<li class="list-group-item">
            <div class="wd-head-image">
              <img src="starship.jpg" class="wd-topic-heading-image">
            <div class="wd-img-text">SpaceX's Starship</div>
            </div>
            </li>
            ${
        posts.map(posts => {
            return(PostSummaryItem(posts));
        }).join('')
    }
        </ul>
    `);
}
export default WhoToFollowList;