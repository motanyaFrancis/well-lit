
const Header: React.FC = () => {
    return (
        <nav className="barStyle topBar"> {/* Use global class names */}

            <span className="header_span">Well-Lit</span>
            <strong className="header_strong">Pictures</strong>
            <button className="menuButton"> {/* Use global class name */}
                <div className="menu-icon"></div> {/* Use global class name */}
            </button>
        </nav>
    );
};

export default Header;