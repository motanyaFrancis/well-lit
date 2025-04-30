"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex justify-center leftNavBar">
            <ul className='py-auto'>
                <li>
                    <Link href="/" className={pathname === '/' ? "active" : ""}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/about" className={pathname === '/about' ? "active" : ""}>
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/discover" className={pathname === '/discover' ? "active" : ""}>
                        Discover
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === '/contact' ? "active" : ""}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
