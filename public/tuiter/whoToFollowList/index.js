import WhoToFollowListItem from "../WhoToFollowListItem/WhoToFollowListItem.js"
import who from "./who.js"
// const WhoToFollowList = () => {
//     return (`
//             <ul class="list-group">
//             <!-- continue here -->
//             $(WhoToFollowListItem($who[0]))
//             </ul>
// `); }

const WhoToFollowList = () => {
    return(`
            <div class="list-group">
            <span class="list-group-item wd-bg-gray wd-tuit-title-2">Who to follow</span>
</div>
            ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
        </ul>
    `);
}
export default WhoToFollowList;