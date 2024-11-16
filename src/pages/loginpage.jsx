import { Heading } from "../comoponents/Heading"
import { Input } from "../comoponents/input/input"

export const LoginPage = () => {
    return (
        <>
        <Heading text = {"Sign Up"}/>
        <form action="">
            <Input placeholder={"Name"} inputType={"text"}/>
            <br />
            <Input placeholder={"E-mail"} inputType={"email"}/>
            <br />
            <Input placeholder={"Password"} inputType={"password"}/>
            <br />
            <button>Submit</button>
        </form>
        </>
    )
}