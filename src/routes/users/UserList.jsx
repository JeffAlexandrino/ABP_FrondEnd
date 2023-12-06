import { NavLink } from "react-router-dom";

function mostraModal() {
  let popUpModal = document.getElementById("popup-modal");
  popUpModal.classList.remove("hidden");
}

function escondeModal() {
  let popUpModal = document.getElementById("popup-modal");
  popUpModal.classList.add("hidden");
}

export default function UserList() {
  return (
    <div className="p-6">
      <h2 className="mb-10 flex justify-between text-4xl font-extrabold">
        Lista de Usuários
        <NavLink
          to="/user-create"
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300">
          Cadastrar Usuário
        </NavLink>
      </h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Telefone
              </th>
              <th scope="col" className="px-6 py-3">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b odd:bg-white even:bg-gray-50">
              <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                Maria Silva
              </th>
              <td className="px-6 py-4">maria.silva@email.com</td>
              <td className="px-6 py-4">(123) 456-7890</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/user-edit/1">
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
                João Santos
              </th>
              <td className="px-6 py-4">joao.santos@email.com</td>
              <td className="px-6 py-4">(987) 654-3210</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/user-edit/1">
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
                Ana Oliveira
              </th>
              <td className="px-6 py-4">ana.oliveira@email.com</td>
              <td className="px-6 py-4">(111) 222-3333</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/user-edit/1">
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
                Pedro Almeida
              </th>
              <td className="px-6 py-4">pedro.almeida@email.com</td>
              <td className="px-6 py-4">(555) 444-3333</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/user-edit/1">
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
                Sofia Ferreira
              </th>
              <td className="px-6 py-4">sofia.ferreira@email.com</td>
              <td className="px-6 py-4">(999) 888-7777</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/user-edit/1">
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
                Carlos Machado
              </th>
              <td className="px-6 py-4">carlos.machado@email.com</td>
              <td className="px-6 py-4">(777) 666-5555</td>
              <td className="px-6 py-4">
                <NavLink className="font-medium text-blue-600 hover:underline" to="/user-edit/1">
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
              <h3 className="mb-5 text-lg font-normal text-gray-500">Tem certeza que vai excluir o Usuário?</h3>
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
