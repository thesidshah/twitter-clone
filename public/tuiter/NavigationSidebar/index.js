const NavigationSidebar = (activeItem) => {
    if(activeItem === "Home") {
            return (`
                <nav class="wd-first-column">
                <div class="list-group flex-column">
                    <div class = "nav-item">
                        <a class="list-group-item nav-link wd-borderless" href="/">
                            <i class="fab fa-2x fa-twitter"></i></a>
                    </div>
                <!-- continue the rest of the list -->
                    <div class = "nav-item">
                        <a class="list-group-item active wd-borderless" href="/">
                            <i class="fas fa-home wd-padded-right"></i><span class = "wd-text">Home </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-hashtag wd-padded-right"></i><span class = "wd-text">Explore </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-bell  wd-padded-right"></i><span class = "wd-text">Notifications </span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-envelope wd-padded-right"></i><span class = "wd-text">Messages </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-bookmark wd-padded-right"></i><span class = "wd-text">Bookmarks </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-list wd-padded-right"></i><span class = "wd-text">Lists </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-user wd-padded-right"></i><span class = "wd-text">Profile </span>
                        </a>
                    </div>
                    <div class = "nav-item wd-borderless">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-circle wd-padded-right"></i><span class = "wd-text">More   </span>        
                        </a>
                    </div>
                </div>
                <div class="d-grid mt-2">
                    <a href="tweet.html"
                       class="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
                </nav>
        `);
    }
    else if(activeItem === "Explore") {
        return (`
                <nav class="wd-first-column">
                <div class="list-group flex-column">
                    <div class = "nav-item">
                        <a class="list-group-item nav-link wd-borderless" href="/">
                            <i class="fab fa-2x fa-twitter"></i></a>
                    </div>
                <!-- continue the rest of the list -->
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fas fa-home wd-padded-right"></i><span class = "wd-text">Home </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item active wd-borderless" href="/">
                            <i class="fa-solid fa-hashtag wd-padded-right"></i><span class = "wd-text">Explore </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-bell  wd-padded-right"></i><span class = "wd-text">Notifications </span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-envelope wd-padded-right"></i><span class = "wd-text">Messages </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-bookmark wd-padded-right"></i><span class = "wd-text">Bookmarks </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-list wd-padded-right"></i><span class = "wd-text">Lists </span>
                        </a>
                    </div>
                    <div class = "nav-item">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-user wd-padded-right"></i><span class = "wd-text">Profile </span>
                        </a>
                    </div>
                    <div class = "nav-item wd-borderless">
                        <a class="list-group-item wd-borderless" href="/">
                            <i class="fa-solid fa-circle wd-padded-right"></i><span class = "wd-text">More   </span>        
                        </a>
                    </div>
                </div>
                <div class="d-grid mt-2">
                    <a href="tweet.html"
                       class="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
                </nav>
        `);
    }
}
export default NavigationSidebar;
