import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row">
        <div class="col-lg-2 col-md-1 col-2">
            ${NavigationSidebar("home")}
        </div>
        <div class="col-lg-6 col-md-11 col-10">
            ${PostList()}
        </div>
        <div class="col-lg-4 d-none d-lg-block">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);
