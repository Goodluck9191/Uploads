const BASE_URL = "http://localhost:3000";

export type User = {
	id?: string;
	username: string;
	email: string;
	password: string;
};

export const getUsers = async (): Promise<User[]> => {
	const res = await fetch(`${BASE_URL}/users`);
	if (!res.ok) {
		throw new Error(`Failed to fetch users: ${res.status}`);
	}
	return res.json();
};

export const createUser = async (user: User): Promise<User> => {
	const res = await fetch(`${BASE_URL}/users`, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(user),
	});
	if (!res.ok) {
		throw new Error(`Failed to create user: ${res.status}`);
	}
	return res.json();
};
