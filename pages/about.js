import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";
import Mejor from '/public/4.jpg';

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name='description' content='This is the about page' />
            </Head>
            <Image src={Mejor} width={600} height={450} placeholder="blur" />

            <h1>About Page</h1>
            {[ '2', '3', '4'].map((path) => {
                return (
                    <Image key={path} src={`/${path}.jpg`} width={900} height={400} />
                );
            })}

        </>
    );
};

export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    );
};