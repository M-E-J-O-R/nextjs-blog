import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";


const Home = () => {
    const { data: session, status, } = useSession();
    console.log({ session, status });

    const router = useRouter();
    const handleRouting = () => {
        console.log('This is a programmatic routing');
        router.push('/product');
    };
    return (

        <>
            <Link href="/about">
                <a  >about
                </a>
            </Link>
            <br />
            <Link href="/contact">
                <a >contact
                </a>
            </Link>
            <br />
            <Link href="/componentsdoc">
                <a >doc
                </a>
            </Link>
            <br />
            <Link href="/blog">
                <a >blog
                </a>
            </Link>
            <br />
            <Link href="/dashboard">
                <a >Dashboard
                </a>
            </Link>
            <br />
            {(!session && status !== 'loading') && <Link Link href="api/auth/signin" className={status === 'loading' ? 'loading' : 'loaded'}>
                <a onClick={(event) => {
                    event.preventDefault();
                    signIn();
                }}>Sign in
                </a>
            </Link >}

            <br />
            {(session) && <Link href="api/auth/signout" className={status === 'loading' ? 'loading' : 'loaded'}> 
                <a onClick={(event) => {
                    event.preventDefault();
                    signOut();
                }

                }>Sign out
                </a>
            </Link>}

            <h1>Home Page</h1>
            <button onClick={handleRouting}> Click me and go to product</button>

        </>


    );
};

export default Home;