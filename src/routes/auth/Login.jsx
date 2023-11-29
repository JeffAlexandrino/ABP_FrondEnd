
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/styleLogin.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push('/home');
    };

    return (
        <div>

            <h1>Login</h1>
            <p>Seja bem-vindo(a) novamente. Faça login para acessar a sua conta.</p>
            <form onSubmit={handleSubmit} method="post">
                <div className="campo">
                    <span className="material-symbols-outlined">person</span>
                    <input type="email" name="login" id="ilogin" placeholder="Seu e-mail" required maxLength="30" value={email} onChange={handleEmailChange} /> 
                    <label htmlFor="ilogin">Login</label>
                </div>
                <div className="campo">
                    <span className="material-symbols-outlined">vpn_key</span>
                    <input type="password" name="senha" id="isenha" placeholder="Sua senha" required minLength="4" value={password} onChange={handlePasswordChange} />
                    <label htmlFor="senha">Senha</label>
                </div>
                <NavLink className="login-btn" to="/home">Entrar como colaborador</NavLink>
                <NavLink className="login-btn" to="/home">Entrar como cliente</NavLink>

                <NavLink
                    to="/forgot-password"
                    className="botao">
                    Esqueci a senha <span className="material-symbols-outlined">mail</span>
                </NavLink>
            </form>

            

<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
    );
}

