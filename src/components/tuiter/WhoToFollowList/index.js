import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(
        <>

        <ul>
            <li className="list-group-item list-group-items  wd-bg-gray">Who to follow</li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
        })
    }
        </ul>
        </>
    );
}
export default WhoToFollowList;