import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row">
        <div class="col-lg-2 col-md-1 col-2">
        
            ${NavigationSidebar("Home")}
        </div>
<!--        <div class="col-lg-6 col-md-11 col-10">-->
 <div class="col-10 col-md-10 col-lg-6">
                <span class="wd-search "><i class="fa fa-search"></i></span>
                <div class="input-group mb-6">
                <input type="search" class="form-control rounded-pill wd-padded-left" placeholder="Search Twitter" aria-label="Search"
                aria-describedby="search-addon" />
                <i class="fa fa-cog fa-2x" ></i>
            </div>
        

      <ul class="nav nav-tabs mt-6">
          <li class="nav-item">
              <a class="nav-link active" href="for-you.html"><span class="wd-nav-text-selected">For you</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="trending.html"><span class="wd-nav-text">Trending</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text">News</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text">Sports</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"><span class="wd-nav-text-vanish">Entertainment</span></a>
          </li>
      </ul>
            ${PostList()}
        </div>
        <div class="col-lg-4 d-none d-lg-block">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);
