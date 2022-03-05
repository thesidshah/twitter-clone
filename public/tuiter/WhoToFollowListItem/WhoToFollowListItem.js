const WhoToFollowListItem = (who) => {
    return(`
            <li class="list-group-item list-group-items wd-follow-box wd-bg-gray"><img src="${who.avatarIcon}" class="wd-tuit-image-follow"><span class = "wd-tuit-title">${who.userName}</span>  <i class="fa fa-check-circle"></i><br>
				    <a href="#" class="wd-follow-handle wd-tuit-topic">@${who.handle}</a><button class="btn btn-primary btn-sm followBtn" type="button">Follow</button></li>
    `);
}
export default WhoToFollowListItem;