import { useRouter } from "next/router";

const ProductDetails = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h2>Details of the product selected {productId}</h2>
    );
};

export default ProductDetails;