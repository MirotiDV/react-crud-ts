import { useUserStore } from "../store/userStore.ts"


export function CreateNewUser() {

    const { addUser } = useUserStore();

    return (
        <>
        <form className="newUserContainer" onSubmit={() => addUser({id: '4', username: 'John Doe', email: 'john.doe@example.com'})}>
            <h1>Add User</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Create</button>
        </form>
        </>
    )}