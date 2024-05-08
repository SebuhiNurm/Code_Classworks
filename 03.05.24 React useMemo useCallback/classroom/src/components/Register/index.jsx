import { useState } from "react"
import StudentRegister from "./StudentRegister"
import TeacherRegister from "./TeacherRegister"

function Register() {
    const [isLogged, setIsLogged] = useState(true);
    return (
        <>
            {isLogged ? (<StudentRegister isLogged={isLogged} setIsLogged={setIsLogged} />) : (<TeacherRegister isLogged={isLogged} setIsLogged={setIsLogged} />)}
        </>
    )
}

export default Register