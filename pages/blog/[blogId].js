const Blog = ({ blog }) => {
    return (
        <>
            <div key={blog.id}>
                <h2>{blog.id}  {blog.title}</h2>
                <p>{blog.body}</p>
            </div>
            <hr />

        </>

    );
};

export default Blog;

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths = data.map((post) => {
        return {
            params: {
                blogId: `${post.id}`
            }
        };
    });
    return {
        paths, fallback: 'blocking'
    };
};


export const getStaticProps = async (context) => {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
    const data = await response.json();
    return {
        props: {
            blog: data
        }
    };
};
