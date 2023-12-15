import { useState } from "react";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = async () => {
        if (email && password) {
            const loginRequest = {
                email,
                password
            };
            const response = await fetch("http://localhost:5094/Auth/login", {
                method: "POST",
                headers: {
                    "Contetn-Type" : "application/json",
                    
                }, 
                body: JSON.stringify(loginRequest),
            });
            const data = await response.json();
            props.setToken(data.token);
        }
    };
    return (
        <div className="loginForm">
            <h1>Вход</h1>
            <form action="#">
                <div>
                <input  
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div>
                    <input 
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <button 
                    type="button"
                    onClick={login}
                    style={{marginTop: "10px"}}>
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;