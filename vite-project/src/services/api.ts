
const BASE_URL = "http://localhost:3000"

export type User = {
    id?: number
    username: string
    email: string
    password: string
}


export const getUsers = async (): Promise<User[]> => {

    const res = await fetch(`${BASE_URL}/users`);
    return res.json()

};


export const createUser = async (user: User): Promise<User> => {
    const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body:JSON.stringify(user)

    })
    return res.json()
}