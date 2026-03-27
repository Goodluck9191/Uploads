import { useState } from "react";
import { createUser, getUsers } from "../services/api";

export function useAuthLogic() {
    const [user, setUser] = useState(()=> {
        const stored = localStorage.getItem("users")
        return stored ? JSON.parse(stored) : null
    })

    const signUp = async(username:string, email:string, password:string) => {

        const users = await getUsers()

        const exists = users.some(u => u.email == email)

        if (exists) {
            alert(`The email ${email} is already exists please use another or try to login`)
            return
        }

        const newUser = await createUser({username, email, password})

        setUser(newUser)
        localStorage.setItem("users", JSON.stringify(newUser))

    }

    const signIn = async(email:string, password:string) => {

        const users = await getUsers()

        const foundUser = users.find(u => u.email == email && u.password == password)

        if(foundUser) {
            setUser(foundUser)
            localStorage.setItem("users", JSON.stringify(foundUser))
            return true
        }

        return false

    }

    const signOut = () => {
        setUser(null)
        localStorage.removeItem("users")
    }

    return {user, signUp, signIn, signOut }
}