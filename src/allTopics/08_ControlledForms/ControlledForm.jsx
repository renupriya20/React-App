import { useState } from "react";

const ControlledForm = () => {
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [course, setCourse] = useState(" ");


    const handleUsername = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value);

    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handelCourse = (e) =>{
        setCourse(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newUser = { username, email, password, course };
        console.log(newUser);



    }

    return (
        <>
            <h1> Learn Controlled Forms </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                < input type="text" name="username" id="username" value={username} onChange={handleUsername} />
                <br />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={handleEmail} />
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input type="email" name="password" id="password" value={password} onChange={handlePassword} />
                <br />
                <br />

                <label htmlFor="course">Select Course</label>
                <select name="course" id="course" value={course} onChange={handelCourse}>
                    <option value="" disabled selected >Select Here</option>
                    <option value="java FullStack">Java FullStack</option>
                    <option value="Python FullStack">Python FullStack</option>
                    <option value="Mern FullStack">Mern FullStack</option>
                </select>
                <button>Submit</button>
            </form>
        </>
    )
};

export default ControlledForm;