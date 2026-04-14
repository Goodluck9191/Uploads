import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import { useAssetLogic } from "../hooks/useAsset";
import { useEffect, useState } from "react";
import { type Asset } from "../services/api";

const AssetsPage = () => {
	const [assets, setAssets] = useState<Asset[]>([]);

	const { AllAsset } = useAssetLogic();

	async function fetchAssets() {
		const assets = await AllAsset();
		setAssets(assets);
	}

	useEffect(() => {
		fetchAssets();
	}, []);

	if (!assets.length) {
		return <p>Loading assets...</p>;
	}

	return (
		<div className="flex">
			<Navbar />
			<Leftbar />

			<section className="py-20  flex flex-col w-full">
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-x-2 gap-y-5 py-10 px-10">
					{assets.map((asset) => (
						
						<div className="bg-cyan-400 shadow-2xl px-4 py-5 w-87.5 rounded-2xl flex flex-col justify-center ">
							<div className="flex  justify-between">
								<h1 className="text-primary">{asset.assetName}</h1>
								<p className="text-secondary">In use</p>
							</div>
							<div className="flex  justify-between">
								<h1 className="text-sm">{asset.description}</h1>
								<p className="text-sm ">In use</p>
							</div>
							<div className="flex  justify-between">
								<h1 className="text-sm">Location</h1>
								<p className="text-sm">{asset.location}</p>
							</div>
							<div className="flex  justify-between">
								<h1 className="text-sm">Assigned to</h1>
								<p className="text-sm">{asset.assignedTo}</p>
							</div>

							<div className="flex justify-between py-5 ">
								<button className="bg-accent px-3 py-3 rounded-lg hover:cursor-pointer">
									view Details
								</button>
								<button className="bg-white px-3 py-3 rounded-lg hover:cursor-pointer">
									Edit
								</button>
								<button className="bg-red-400 px-3 py-3 rounded-xl hover:cursor-pointer">
									view Details
								</button>
							</div>
						</div>
					))}

					
				</div>
			</section>
		</div>
	);
};

export default AssetsPage;
