const BASE_URL = "http://localhost:3000";
const BASE_URL2 = "http://localhost:3001";

export type User = {
	id?: string;
	username: string;
	email: string;
	password: string;
};
export type Asset = {
	assetName: string;
	assetTag: string;
	category: string;
	location: string;
	description: string;
	assignedTo: string;
	purchaseDate?: string;
	serialNumber?: string;
	warantUntil?: string;
	supplier?: string;
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

export const createAsset = async (asset: Asset): Promise<Asset> => {
	const res = await fetch(`${BASE_URL2}/assets`, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(asset),
	});
	if (!res.ok) {
		throw new Error(`Failed to create the asset: ${res.status}`);
	}
	return res.json();
};
