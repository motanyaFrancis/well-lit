import Navigation from "../components/Navigation";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>
                <Navigation />
                <div className="flex flex-col ">
                    <div className="relative lg:mt-0 md:mt-28 sm:mt-32 mt-36">
                        {children}
                    </div>
                </div>

            </main>
        </>

    );
}
