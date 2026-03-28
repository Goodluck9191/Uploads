import { useState } from "react";
import { createUser, getUsers } from "../services/api";

export function useAuthLogic() {
	const [user, setUser] = useState(() => {
		const stored = localStorage.getItem("users");
		return stored ? JSON.parse(stored) : null;
	});

	const signUp = async (
		username: string,
		email: string,
		password: string,
	): Promise<boolean> => {
		try {
			const users = await getUsers();
			const exists = users.some((u) => u.email === email);

			if (exists) {
				return false;
			}
			const newUser = await createUser({ username, email, password });
			setUser(newUser);
			localStorage.setItem("users", JSON.stringify(newUser));
			return true;
		} catch (error) {
			console.error("Sign up failed:", error);
			return false;
		}
	};

	const signIn = async (email: string, password: string) => {
		const users = await getUsers();

		const foundUser = users.find(
			(u) => u.email == email && u.password == password,
		);

		if (foundUser) {
			setUser(foundUser);
			localStorage.setItem("users", JSON.stringify(foundUser));
			return true;
		}

		return false;
	};

	const signOut = () => {
		setUser(null);
		localStorage.removeItem("users");
	};
    return { user, signUp, signIn, signOut };
}
