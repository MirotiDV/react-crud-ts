
export function CreateNewUser() {
    return (
        <>
        <form className="newUserContainer">
            <h1>Add User</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Create</button>
        </form>
        </>
    )}