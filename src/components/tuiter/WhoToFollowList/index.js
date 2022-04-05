import who from "../data/who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
        <>
        <ul style={{paddingLeft: 0 + 'px'}}>
            <li className="list-group-item list-group-items  wd-bg-gray">Who to follow</li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who} key = {who.handle}/>
                    );
        })
    }
        </ul>
        </>
    );
}
export default WhoToFollowList;