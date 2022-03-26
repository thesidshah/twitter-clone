const NavItem = (
    {navItem = {
        className : "nav-link active",
        Link : "for-you.html",
        span: {
            className : "wd-nav-text-selected",
            text : "For you",
        }
    }}
) => {
    return (
        <li className = "nav-item">
            <a className = {navItem.className}
            href = {navItem.Link}
            >
                <span className = {navItem.span.className}>
                    {navItem.span.text}
                </span>
            </a>
        </li>
    );
};
export default NavItem;