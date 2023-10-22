import Link from "next/link";

const Product = () => {
    return (
        <dvi>
            <Link href="/">
                <a > Home</a>
            </Link>

            <h1>Product Page</h1>
            <Link href='product/1'>
                <a > Product 1</a>
            </Link>
            <Link href='product/2'>
                <a > Product 2</a>
            </Link>
            <Link href='product/3'>
                <a > Product 3</a>
            </Link>

        </dvi>);
};

export default Product;

export const getStaticProps = async () => {

    const response = await fetch('http://localhost:3001/product');
    const data = await response.json();
    console.log(data)

    return {
        props: {
            product: data
        }
    };
};