import { useState } from "react";

const ControlledForm1 = () => {
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [course, setCourse] = useState(" ");
    const [gender, setGender] = useState(" ");
    const [skills, setSkills] = useState([]);
    const [show, setShow] = useState(false);
    const [age, setAge] = useState(" ");



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

    const handelCourse = (e) => {
        setCourse(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleSkills = (e) => {
        if (e.target.checked) {
            setSkills([...skills, e.target.value]);
        } else {
            setSkills(skills.filter(i => i !== e.target.value));
        }
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let newUser = { username, email, password, course ,skills, age,gender};
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

                <label htmlFor="course"> Course</label>
                <select name="course" id="course" value={course} onChange={handelCourse}>
                    <option value="" disabled selected >Select Here</option>
                    <option value="java FullStack">Java FullStack</option>
                    <option value="Python FullStack">Python FullStack</option>
                    <option value="MERN FullStack">MERN FullStack</option>
                </select>
                <br />
                <br />
                <label htmlFor="grnder">  Gender </label>
                <label htmlFor="male">
                    <input type="radio" name="gender" value="Male" onChange={handleGender} />
                    Male
                </label>
                <label htmlFor="female">
                    <input type="radio" name="gender" value="Female" onChange={handleGender} />
                    Female
                </label>

                <label htmlFor="other">
                    <input type="radio" name="gender" value="Other" onChange={handleGender} />
                    Other
                </label>
                <br />
                <br />
                <div>
                    <label htmlFor="Skills">Skills</label>
                    <button onClick={() => setShow(!show)} >Select Here</button>
                    {show && (
                        <div>
                            <label>
                                <input type="checkbox" value="HTML" onChange={handleSkills} />
                                HTML
                            </label><br/>
                            <label>
                                <input type="checkbox" value="CSS" onChange={handleSkills} />
                                CSS
                            </label><br/>
                            <label>

                                <input type="checkbox" value="Javascript" onChange={handleSkills} />
                                Javascript
                            </label><br/>
                            <label>
                                <input type="checkbox" value="React" onChange={handleSkills} />
                                React
                            </label>
                        </div>
                       
                    )}
                
            </div>
                <p>{skills.join(", ")}</p>
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input type="age" name="age" id="age" value={age} onChange={handleAge} />



                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
};

export default ControlledForm1;