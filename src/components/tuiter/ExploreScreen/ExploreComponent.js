import PostSummaryList from "../PostSummaryList/index.js";
import Posts from "../PostList/posts";
import NavItemList from "../NavBar/NavItemList";
import React from "react";
// const ExploreComponent = () => {
//     return(`
//             <div class="col-10 col-md-10 col-lg-6">
//                 <span class="wd-search "><i class="fa fa-search"></i></span>
//                 <div class="input-group mb-6">
//                 <input type="search" class="form-control rounded-pill wd-padded-left" placeholder="Search Twitter" aria-label="Search"
//                 aria-describedby="search-addon" />
//                 <i class="fa fa-cog fa-2x" ></i>
//             </div>
//
//
//       <ul class="nav nav-tabs mt-6">
//           <li class="nav-item">
//               <a class="nav-link active" href="for-you.html"><span class="wd-nav-text-selected">For you</span></a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="trending.html"><span class="wd-nav-text">Trending</span></a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="#"><span class="wd-nav-text">News</span></a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="#"><span class="wd-nav-text">Sports</span></a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="#"><span class="wd-nav-text-vanish">Entertainment</span></a>
//           </li>
//       </ul>
//            ${PostSummaryList()}
//     </div>
// `);
// }
// export default ExploreComponent;
// const ExploreComponent = () => {
//     return(
//             <div className="col-10 col-md-10 col-lg-6">
//                 <span className="wd-search "><i className="fa fa-search"/></span>
//                 <div className="input-group mb-6">
//                 <input type="search" className="form-control rounded-pill wd-padded-left" placeholder="Search Twitter" aria-label="Search"
//                 aria-describedby="search-addon" />
//                 <i className="fa fa-cog fa-2x" />
//             </div>
//
//
//       <ul className="nav nav-tabs mt-6">
//           {/*<li className="nav-item">*/}
//           {/*    <a className="nav-link active" href="for-you.html"><span className="wd-nav-text-selected">For you</span></a>*/}
//           {/*</li>*/}
//           {/*<li className="nav-item">*/}
//           {/*    <a className="nav-link" href="trending.html"><span className="wd-nav-text">Trending</span></a>*/}
//           {/*</li>*/}
//           {/*<li className="nav-item">*/}
//           {/*    <a className="nav-link" href="#"><span className="wd-nav-text">News</span></a>*/}
//           {/*</li>*/}
//           {/*<li className="nav-item">*/}
//           {/*    <a className="nav-link" href="#"><span className="wd-nav-text">Sports</span></a>*/}
//           {/*</li>*/}
//           {/*<li className="nav-item">*/}
//           {/*    <a className="nav-link" href="#"><span className="wd-nav-text-vanish">Entertainment</span></a>*/}
//           {/*</li>*/}
//           <NavItemList/>
//       </ul>
//            <PostSummaryList posts={Posts}/>
//     // </div>
// );
// }
// export default ExploreComponent;


//new version for A7
const ExploreComponent = () => {
    return(
        <>
            {/*<span className="wd-search "><i className="fa fa-search"/></span>*/}
            {/*<div className="input-group mb-6">*/}
            {/*    <input type="search" className="form-control rounded-pill wd-padded-left" placeholder="Search Twitter" aria-label="Search"*/}
            {/*           aria-describedby="search-addon" />*/}
            {/*    <i className="fa fa-cog fa-2x" />*/}
            {/*</div>*/}
            <div className="input-group mb-6">
                <span className="wd-search-glass "><i className="fa fa-search"/></span>
                <input type="search" className="form-control rounded-pill wd-padded-left mt-11" placeholder="Search Twitter" aria-label="Search"
                       aria-describedby="search-addon" />
                <i className="fa fa-cog fa-2x" />
            </div>
            <ul className="nav nav-tabs mt-6">
                <NavItemList/>
            </ul>
            <PostSummaryList posts={Posts}/>
        </>
    );
}
export default ExploreComponent;