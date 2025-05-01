import Image from 'next/image';
import Link from 'next/link';
// app/discover/components/FooterRight.tsx
const FooterRight: React.FC = () => {
    return (
        <div className="footer-right">
        <Link href="/">
            <Image
                alt="Well Lit Pictures"
                src="/logo.png"
                className="h-20 w-auto bg-whi"
                width={80}
                height={80}
            />
        </Link>
        </div>
    );
};

export default FooterRight;