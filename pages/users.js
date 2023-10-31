const UserList = ({ users }) => {
    return (
        <div>
            <h1>This is a list of some of our trusted users</h1>
            {users.map((user) =>
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>email: {user.email}</p>
                </div>
            )}

        </div>
    );
};

export default UserList;
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const user = process.env.DB_USER;
    const password = process.env.DB_USER;

    return {
        props: {
            users: data,
        },
    };
}; 