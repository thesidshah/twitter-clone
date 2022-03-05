const PostSummaryItem = (post) => {
    return(`
            <li class="list-group-item">
		    	<img src="${post.image}" class="wd-topic-img"/>
	    	<a href="#" class="wd-tuit-topic">${post.topic}</a><br>
		    	<a href="#" class="wd-topic-heading">${post.userName}  </a><i class="fa fa-check-circle"></i><span class="wd-topic-time"> - ${post.time}</span><br>
		    	<span class="wd-topic-description">${post.title}</span><br>
		    	<span class="wd-topic-tweetcount">${post.tweets}</span>
		    </li>
    `);
}
export default PostSummaryItem;