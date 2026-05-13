import { useUserStore } from "../store/userStore.ts";
import { svgIcons } from "../assets/svgIcons.tsx";
import { toast } from "sonner";

export function ListOfUsers() {
  const {
    deleteUser,
    updateUser,
    toggleVisibility,
    toggleEditability,
    isVisible,
  } = useUserStore();
  const { addSvg, editSvg, deleteSvg, applySvg } = svgIcons;
  const users = useUserStore((state) => state.users);
  // Revisar error de recarga al añadir un usuario y linea de arriba

  const toggleAddUserForm = () => {
    if (!isVisible) {
      toggleVisibility();

      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 10);
    }
  };

  const handleDeleteUser = ({ userId }: { userId: string }) => {
    try{
      deleteUser(userId);
      toast.success('User deleted successfully')
    }catch{
      toast.error('Failed to delete user')
    }
  }

  // TODO aplicar restriccion a la edicion del email para que mantenga el formato correcto, revisar que el nombre no quede vacío o con solo espacios en blanco
  const editUserButton = ({ userId }: { userId: string }) => {
    const userToEdit = users.find((user) => user.id === userId);

    const buttonSvg = userToEdit?.isEditableUser ? applySvg : editSvg;

    const handleEditClick = () => {
    
      if (!userToEdit?.isEditableUser) {
        toggleEditability(userId);
      } else {
        userToEdit.username = document.getElementById(`username-${userId}`)?.textContent || "";
        userToEdit.email = document.getElementById(`email-${userId}`)?.textContent || "";
        updateUser(userId, userToEdit);
        toggleEditability(userId);
        toast.success('User data updated successfully')
      }
    };
    return (
      <button
        type="button"
        className="btnSvg"
        onClick={() => handleEditClick()}
      >
        {buttonSvg()}
      </button>
    );
  };

  return (
    <>
      <section className="table-container">
        <table>
          <thead className="table-header">
            <tr>
              <th>Users</th>
            </tr>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {users.map((item) => (
              <>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td contentEditable={item.isEditableUser} id={`username-${item.id}`}>
                    {item.username}
                  </td>
                  <td contentEditable={item.isEditableUser} id={`email-${item.id}`}>
                    {item.email}
                  </td>
                  <td>
                    {editUserButton({ userId: item.id })}

                    <button
                      type="button"
                      className="btnSvg"
                      onClick={() => handleDeleteUser({userId: item.id})}
                    >
                      {deleteSvg()}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <hr />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="btnSvg"
                  id="addUserBtn"
                  onClick={() => toggleAddUserForm()}
                >
                  {addSvg()}
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
