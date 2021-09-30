import { OuterWrapper,
         FieldWrapper } from "./LoginStyled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Login = () => {

    const [user, setUser] = useState("");

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("")

    const history = useHistory();

    const verifyCredentials = () => {
        setMessage("");
        if(user=="Vinicius" && password=="123"){
            localStorage.setItem('user', user);
            history.push("/");
        }else{
            setMessage("Erro! Credenciais Incorretas");
        }
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push("/");
        }
    }, []);

    return(
        <OuterWrapper>
            <FieldWrapper>
                <h2>Usuário:</h2>
                <Input value={user} onChange={setUser}/>                
            </FieldWrapper>
            <FieldWrapper>
                <h2>Senha:</h2>
                <Input value={password} onChange={setPassword}/>                
            </FieldWrapper>
            <div>{message}</div>
            <Button title="Login" onClick={verifyCredentials}/>
        </OuterWrapper> 
    )
    
}

export default Login;