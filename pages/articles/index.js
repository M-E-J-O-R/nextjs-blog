const ArticleList = ({ articles }) => {
    return (
        <main>
            <h1>This is the list of articles</h1>
            {articles.map((article) => {
                return <div key={article.id}>
                    <h2><i>{article.title} </i></h2>
                    <p>{article.body}</p>
                    <p> <small>{article.category}</small></p>

                </div>;
            })}

        </main>
    );
};

export default ArticleList;

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/articles');
    const data = await response.json();
    return {
        props: {
            articles: data
        }
    };

}
