import { useRouter } from "next/router";

const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    if (params.length === 1) {
        return (
            <h1>This is the feature {params[0]}</h1>
        );
    }
    if (params.length === 2) {
        return (
            <h1>This is the concept {params[1]}</h1>
        );
    }
    return (
        <h1>
            This is the Docs homepage
        </h1>);
};

export default Docs;