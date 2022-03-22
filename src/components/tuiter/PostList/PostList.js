import posts from "./posts.js";
import PostItem from "./PostItem.js";
import React from 'react';
const PostList = () => {
    return(
    	<ul className="list-group">

            {
                posts.map(posts => {
                   return  <PostItem post = {posts}/>;
                })
            }

        </ul>
    );
}
export default PostList;


            // <div class="wd-head-image">
            //   <img src="starship.jpg" class="wd-topic-heading-image">
            // <div class="wd-img-text">SpaceX's Starship</div>
            // </div>