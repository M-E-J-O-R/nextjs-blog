import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const BlogList = ({ blog }) => {
    const { data: session, status } = useSession();
    return (
        <>
            {(!session && status !== 'loading') && <Link Link href="api/auth/signin" >
                <a onClick={(event) => {
                    event.preventDefault();
                    signIn('github');
                }}>Sign in
                </a>
            </Link >}

            <br />
            {(session) && <Link href="api/auth/signout" >
                <a onClick={(event) => {
                    event.preventDefault();
                    signOut();
                }

                }>Sign out
                </a>
            </Link>}

            <h1>Blog pages</h1>
            {blog.map((blog) => {
                return <Link href={`blog/${blog.id}`} key={blog.id} passHref>
                    <h2>{blog.title}</h2>
                </Link>;
                <hr />;


            })}

        </>
    );
};

export default BlogList;
export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogData = await response.json();
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
                permanent: false
            }
        };
    }
    return {
        props: {
            session,
            blog: session ? blogData.slice(0, 4) : [],
        },
    };
};