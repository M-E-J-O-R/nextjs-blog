import useSWR from "swr";


const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
};

const DashboardSWR = () => {
    const { data, error, isLoading } = useSWR('dashboard', fetcher);
    if (isLoading) {
        return <p>Loading....</p>;
    }
    if (error) {
        return <p>Error while loading page</p>;
    }

    return (
        <main>
            <h1>Name: {data.name} Username: {data.username}</h1>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>Likes: {data.likes}</p>

        </main>);
};

export default DashboardSWR;