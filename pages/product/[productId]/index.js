import { useRouter } from "next/router";

const Products = ({ product }) => {
    const router = useRouter()
    
    if (router.isFallback) {
        return <div>Loading....</div>
    }
    return (
        <div>
            <h1>{product.id} {product.name}</h1>
            <h2>{product.body}</h2>
            <h2>{product.price}</h2>
        </div>
    );
};

export default Products;

export const getStaticProps = async (context) => {
    const { params } = context;
    const response = await fetch(`http://localhost:3001/product/${params.productId}`);
    const data = await response.json();
    console.log('Regenerating data')

    return {
        props: {
            product: data
        },
        revalidate: 15,
    };

};



export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { productId: '1' } }
        ],
        fallback: true
    };
};