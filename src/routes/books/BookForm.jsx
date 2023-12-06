import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function BookForm() {
  let { id } = useParams();

  return (
    <div className="p-6">
      <form className="mx-auto max-w-sm">
        <h4 className="text-4xl mb-6 font-extrabold">{id ? `Editar Livro ${id}` : "Cadastrar Livro"}</h4>
        
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Título:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o Título"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Autor:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o Autor"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Categoria:</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite a Categoria"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Preço:</label>
          <input
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o Preço"
            required
          />
        </div>
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-900">Data de Lançamento:</label>
          <input
            type="date"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o Preço"
            required
          />
        </div>

        <NavLink
          to="/books"
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Salvar
        </NavLink>
      </form>
    </div>
  );
}
