
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
  <p>Seja bem-vindo(a) novamente. Faça login para acessar a sua conta.</p>

  <form onSubmit={handleSubmit} method="post" className="flex flex-col items-center">
    <div className="mb-5">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Seu email
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="seuemail@email.com"
        required
      />
    </div>

    <div className="mb-5">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Sua senha
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Lembrar de mim
      </label>
    </div>

    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Entrar
    </button>
  </form>

  <div className="flex mt-2">
    <NavLink
      to="/home"
      className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition-all w-1/2"
    >
      Entrar como colaborador
    </NavLink>

    <NavLink
      to="/home"
      className="bg-green-500 text-white p-1 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300 transition-all ml-2 w-1/2"
    >
      Entrar como cliente
    </NavLink>
  </div>

  <NavLink
    to="/forgot-password"
    className="bg-gray-500 text-white p-1.5 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-300 transition-all mt-2 w-full"
  >
    Esqueci a senha <span className="material-symbols-outlined"></span>
  </NavLink>
</div>

      );
  }

