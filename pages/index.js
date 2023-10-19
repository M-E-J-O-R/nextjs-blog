import Link from "next/link";

const Home = () => {
    return (

        <>
            <Link href="/about">
                <a >about
                </a>
            </Link>
            <br />
            <Link href="contact">
                <a >contact
                </a>
            </Link>
            <br />
            <Link href="doc">
                <a >doc
                </a>
            </Link>
            <br />
            <Link href="blog">
                <a >blog
                </a>
            </Link>
            <h1>Home Page</h1>
        </>


    );
};

export default Home;