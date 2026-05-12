import { useUserStore } from "../store/userStore.ts"


export function CreateNewUser() {

    const { addUser, isVisible, toggleVisibility } = useUserStore();

    //TODO agregar restricciones al formulario para que no se introduzcan datos vacíos o inválidos, revisar el tipo de email y el nombre, no pueden estar vacíos ni contener solo espacios en blanco

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get("name") as string
        const email = formData.get("email") as string


		addUser({ id: crypto.randomUUID(), username: name, email: email, isEditableUser: false })
        form.reset()
        toggleVisibility()
    }


    if(isVisible) {
    return (
        <>
        <form className="newUserContainer" onSubmit={handleSubmit}>
            <h1>Add User</h1>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Create</button>
        </form>
        </>
    )}}