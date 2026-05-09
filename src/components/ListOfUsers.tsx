import { useUserStore } from "../store/userStore.ts";

export function ListOfUsers() {

  const {deleteUser, toggleVisibility, isVisible} = useUserStore();
  const users = useUserStore((state) => state.users);
  // Revisar error de recarga al añadir un usuario y linea de arriba

 
  const toggleAddUserForm = () => {
    if(!isVisible) {
      toggleVisibility()

      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 10);

    }
  }


    

  return (
    <>
  <section className="table-container">
      <table>
        <thead className="table-header">
          <tr>
            <th>Usuarios</th>
          </tr>
          <tr >
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody className="table-body">
  
        {users.map((user) => (
          <>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button type="button" className="btnSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
              <button type="button" className="btnSvg" onClick={() => deleteUser(user.id)}>
                <svg
                  aria-label="Remove element"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </td>
          </tr>
          <tr>
              <td colSpan={4}><hr /></td>
            </tr>

      </>))}
            
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} style={{ textAlign: "center" }}>
              <button type="button" className="btnSvg" id="addUserBtn" onClick={() => toggleAddUserForm()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
    </>
  );
}

  export default ListOfUsers;