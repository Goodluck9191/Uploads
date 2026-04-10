import React from "react";
import { createAsset } from "../services/api";

export function useAssetLogic() {
	const AddAsset = async (
		assetName: string,
		assetTag: string,
		category: string,
		location: string,
        description: string,
		assignedTo: string,
		purchaseDate?: string,
		serialNumber?: string,
		warantUntil?: string,
		supplier?: string,
		
	): Promise<boolean> => {
		try {
			const newAsset = await createAsset({
				assetName,
				assetTag,
				category,
				location,
                description,
                assignedTo,
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

    return {AddAsset}
}
