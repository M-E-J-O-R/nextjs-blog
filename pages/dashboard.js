import { useEffect, useState } from "react";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUserData() {
            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false);
        }
        fetchUserData();
    }, []);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    return (
        <div>
            {dashboardData && (
                <div>
                    <h1>Name: {dashboardData.name} Username: {dashboardData.username}</h1>
                    <p>Followers: {dashboardData.followers}</p>
                    <p>Following: {dashboardData.following}</p>
                    <p>Likes: {dashboardData.likes}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
