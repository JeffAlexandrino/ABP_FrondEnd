import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function UserForm() {
  let { id } = useParams();

  return (
    <div className="p-6">
      <form className="mx-auto max-w-sm">
        <h4 className="text-4xl mb-6 font-extrabold">{id ? `Editar Usuário ${id}` : "Cadastrar Usuário"}</h4>
        
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Nome:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o Nome"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Email:</label>
          <input
            type="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o Email"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Telefone:</label>
          <input
            type="phone"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite a Telefone"
            required
          />
        </div>

        <NavLink
          to="/users"
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Salvar
        </NavLink>
      </form>
    </div>
  );
}
