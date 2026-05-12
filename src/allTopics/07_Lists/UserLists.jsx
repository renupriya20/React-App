import Employees from "./Employees";

const UserLists = () => {

    const users = [
        { id: 1, name: "priya" },
        { id: 2, name: "John" },
        { id: 3, name: "Clear" },
        { id: 4, name: "Hii" },
        { id: 5, name: "Hello" },


    ];

    return (
        <>
            <h1>Learn Lists in React </h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                    </div>
                )
            })}
<Employees/>

        </>
    );
};

export default UserLists;