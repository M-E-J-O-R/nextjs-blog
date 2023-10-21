import Link from "next/link";

const BlogList = ({ blog }) => {
    return (
        <>

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
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    return {
        props: {
            blog: data.slice(0, 4)
        }
    };

};