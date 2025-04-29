import Image from 'next/image';

// app/discover/components/Header.tsx
const Header: React.FC = () => {
    return (
        <nav className="barStyle topBar"> {/* Use global class names */}
            {/* <Image
                alt="Well Lit Pictures"
                src="/logo.png"
                className="h-20 w-auto bg-whi"
                width={80}
                height={80}
            /> */}
            <span className="header_span">Well-Lit</span>
            <strong className="header_strong">Pictures</strong>
            <button className="menuButton"> {/* Use global class name */}
                <div className="menu-icon"></div> {/* Use global class name */}
            </button>
        </nav>
    );
};

export default Header;