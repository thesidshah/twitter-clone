const PostItem = (post) => {
    return(`
            <li class="list-group-item">
		    	<img src="${post.image}" class="wd-display-img"/>
		    	<a href="#" class="wd-topic-heading">${post.author}  </a><i class="fa fa-check-circle"></i><a href="#" class="wd-follow-handle">@${post.handle}</a>
		    	<span class="wd-topic-time"> - ${post.time}</span><br>
		    	<span class="wd-topic-description">${post.tweet}</span><br>
		    	<div class="wd-head-image">
              		<img src="${post.postImage}" class="wd-topic-heading-image">
		    	<span class="wd-topic-description">${post.caption}</span><br>
		    	<span class="wd-topic-topicname">${post.text}</span>
		    	<div class="wd-icon-links">
					<a href="#" class="wd-icon-link"><i class='fa fa-comment'></i>  22</a>
					<a href="#" class="wd-icon-link"><i class="fa fa-retweet"></i>   34</a>
					<a href="#" class="wd-icon-link-heart">	&#10084;  2</a>
					<a href="#" class="wd-icon-link"><i class="fa fa-upload" aria-hidden="true"></i></a>
				</div>
		    </li>
    `);
}
export default PostItem;