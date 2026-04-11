import React from "react";
import { createAsset, getAsset, type Asset } from "../services/api";

export function useAssetLogic() {
	const AddAsset = async (
		assetName: string,
		assetTag: string,
		assignedTo: string,
		category: string,
		description: string,
		location: string,
		purchaseDate?: string,
		serialNumber?: string,
		warantUntil?: string,
		supplier?: string,
	): Promise<boolean> => {
		try {
			const newAsset = await createAsset({
				assetName,
				assetTag,
				assignedTo,
				category,
				description,
				location,
				purchaseDate,
				serialNumber,
				warantUntil,
				supplier,
			});

			return true;
		} catch (error) {
			console.error("Sign up failed:", error);
			return false;
		}
	};
	const AllAsset = async () => {
		try {
			return await getAsset();
		} catch (error) {
			console.error("Sign up failed:", error);
			return [];
		}
	};

	return { AddAsset, AllAsset };
}
