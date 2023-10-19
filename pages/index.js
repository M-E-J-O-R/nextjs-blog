import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {

    const router = useRouter();
    const handleRouting = () => {
        console.log('This is a programmatic routing');
        router.push('/product');
    };
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
            <button onClick={handleRouting}> Click me and go to product</button>

        </>


    );
};

export default Home;