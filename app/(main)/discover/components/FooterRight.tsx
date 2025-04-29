import Image from 'next/image';
// app/discover/components/FooterRight.tsx
const FooterRight: React.FC = () => {
    return (
        <div className="footer-right"> {/* Use global class name */}
            <Image
                alt="Well Lit Pictures"
                src="/logo.png"
                className="h-20 w-auto bg-whi"
                width={80}
                height={80}
            />
        </div>
    );
};

export default FooterRight;