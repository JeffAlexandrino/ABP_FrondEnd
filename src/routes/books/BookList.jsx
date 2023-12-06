import { NavLink } from "react-router-dom";

function mostraModal() {
  let popUpModal = document.getElementById("popup-modal");
  popUpModal.classList.remove("hidden");
}

function escondeModal() {
  let popUpModal = document.getElementById("popup-modal");
  popUpModal.classList.add("hidden");
}

export default function BookList() {
  return (
    <div className="p-6">
      <h2 className="mb-10 flex justify-between text-4xl font-extrabold">
        Lista de Livros
        <NavLink
          to="/book-create"
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300">
          Cadastrar Livro
        </NavLink>
      </h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Título do Livro
              </th>
              <th scope="col" className="px-6 py-3">
                Autor
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Preço
              </th>
              <th scope="col" className="px-6 py-3">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                Guia do Mochilheiro das Galáxias
              </th>
              <td className="px-6 py-4">Adams, Douglas</td>
              <td className="px-6 py-4">Science Fiction</td>
              <td className="px-6 py-4">R4 45,00</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>

            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                A Revolução dos Bichos
              </th>
              <td className="px-6 py-4">George Orwell</td>
              <td className="px-6 py-4">Ficção</td>
              <td className="px-6 py-4">$12.99</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                O Senhor dos Anéis
              </th>
              <td className="px-6 py-4">J.R.R. Tolkien</td>
              <td className="px-6 py-4">Fantasia</td>
              <td className="px-6 py-4">$15.50</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                Cem Anos de Solidão
              </th>
              <td className="px-6 py-4">Gabriel García Márquez</td>
              <td className="px-6 py-4">Realismo Mágico</td>
              <td className="px-6 py-4">$9.99</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                Dom Quixote
              </th>
              <td className="px-6 py-4">Miguel de Cervantes</td>
              <td className="px-6 py-4">Clássico</td>
              <td className="px-6 py-4">$11.25</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                Harry Potter e a Pedra Filosofal
              </th>
              <td className="px-6 py-4">J.K. Rowling</td>
              <td className="px-6 py-4">Fantasia</td>
              <td className="px-6 py-4">$14.75</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                1984
              </th>
              <td className="px-6 py-4">George Orwell</td>
              <td className="px-6 py-4">Ficção Distópica</td>
              <td className="px-6 py-4">$10.99</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                A Metamorfose
              </th>
              <td className="px-6 py-4">Franz Kafka</td>
              <td className="px-6 py-4">Ficção Absurda</td>
              <td className="px-6 py-4">$8.50</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/book-edit/1">
                  Editar
                </NavLink>
                |
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="#"
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={mostraModal}>
                  Excluir
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white shadow">
            <button
              type="button"
              className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              data-modal-hide="popup-modal">
              <span className="sr-only">Fechar</span>
            </button>
            <div className="p-4 text-center md:p-5">
              <h3 className="mb-5 text-lg font-normal text-gray-500">Tem certeza que vai excluir o livro?</h3>
              <button
                onClick={escondeModal}
                data-modal-hide="popup-modal"
                type="button"
                className="me-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300">
                Sim
              </button>
              <button
                onClick={escondeModal}
                data-modal-hide="popup-modal"
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
                Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
