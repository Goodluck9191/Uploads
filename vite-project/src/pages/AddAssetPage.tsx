import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Leftbar from "../components/Leftbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useAssetLogic } from "../hooks/useAsset";

type FormValues = {
	assetName: string;
	assetTag: string;
	category: string;
	location: string;
	assignedTo: string;
	purchaseDate?: string;
	serialNumber?: string;
	warantUntil?: string;
	supplier?: string;
	description: string;
};

const AddAssetPage = () => {

	const { AddAsset } = useAssetLogic()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		try {
			const success = await AddAsset(data.assetName, data.assetTag, data.assignedTo, data.category, data.description, data.location, data.purchaseDate, data.serialNumber, data.supplier, data.warantUntil)

			if (success) {
				alert('asset created')
			} else {
				alert('asset not created please try again')
			}
		} catch (error) {
			console.log(error)
		}

		reset();
	};

	return (
		<div className="flex ">
			<Navbar />
			<Leftbar />
			<section className="py-20  flex flex-col w-full">
				<div className="flex flex-col py-30 px-20  w-full  justify-center items-center">
					<h1 className="text-4xl">Add New Asset</h1>
					<p>
						Fill in the details below to add a new asset to a sytem
					</p>

					<div className=" w-full py-10 px-10  ">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="grid grid-cols-2 gap-6">
								<div className="flex flex-col gap-3">
									<label htmlFor="">Asset Name</label>
									<input
										type="text"
										placeholder="eg.Dell Laptop"
										{...register("assetName", {
											required: "Asset name is required",
											minLength: {
												value: 3,
												message:
													"aseet name must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"Asset name must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.assetName && (
										<span>{errors.assetName.message}</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Location</label>
									<input
										type="text"
										placeholder="eg.Computer lab"
										{...register("location", {
											required: "Location is required",
											minLength: {
												value: 3,
												message:
													"Location name must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"Location name must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.location && (
										<span>{errors.location.message}</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Asset Tag</label>
									<input
										type="text"
										placeholder="eg.IT.12"
										{...register("assetTag", {
											required: "Asset name is required",
											minLength: {
												value: 3,
												message:
													"aseet tag name must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"asset Tag name must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.assetTag && (
										<span>{errors.assetTag.message}</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Assigned To</label>
									<input
										type="text"
										placeholder="eg.Goodluck"
										{...register("assignedTo", {
											minLength: {
												value: 3,
												message:
													"assigned name name must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"assigned name must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.assignedTo && (
										<span>{errors.assignedTo.message}</span>
									)}
								</div>

								<div className="flex flex-col gap-3">
									<label htmlFor="">Category</label>
									<input
										type="text"
										placeholder="eg.IT Equpment"
										{...register("category", {
											required:
												"category name is required",
											minLength: {
												value: 3,
												message:
													"category name must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"Username must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.category && (
										<span>{errors.category.message}</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Purchase Date</label>
									<input
										type="date"
										placeholder="eg.Dell Laptop"
										{...register("assetName", {
											required:
												"Purchase date is required",
										})}
										className="border p-3 rounded "
									/>
									{errors.assetName && (
										<span>{errors.assetName.message}</span>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-4 py-7">
								<h1>Additional Details</h1>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Serial Number</label>
									<input
										type="text"
										placeholder="eg.DLS-1123"
										{...register("serialNumber", {
											minLength: {
												value: 3,
												message:
													"serialNumber must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"serialNumber must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.serialNumber && (
										<span>
											{errors.serialNumber.message}
										</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Warant Until</label>
									<input
										type="date"
										placeholder="eg.Dell Laptop"
										{...register("warantUntil")}
										className="border p-3 rounded "
									/>
									{errors.warantUntil && (
										<span>
											{errors.warantUntil.message}
										</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="">Supplier</label>
									<input
										type="text"
										placeholder="eg.Dell Tech"
										{...register("supplier", {
											minLength: {
												value: 3,
												message:
													"supplier name must be at least 3 characters",
											},
											maxLength: {
												value: 17,
												message:
													"supplier name must be less than 17 character",
											},
										})}
										className="border p-3 rounded "
									/>
									{errors.supplier && (
										<span>{errors.supplier.message}</span>
									)}
								</div>
								<div className="flex flex-col gap-3">
									<input
										type="text"
										placeholder="Describe the asset including specification, conditon and any other relevant details "
										{...register("description", {
											required: "description is required",
											minLength: {
												value: 3,
												message:
													"description must be at least 3 characters",
											},
											maxLength: {
												value: 50,
												message:
													"description must be less than 50 character",
											},
										})}
										className="border px-3 py-15 rounded "
									/>
									{errors.description && (
										<span>
											{errors.description.message}
										</span>
									)}
								</div>
							</div>
							<div className={"flex flex-col space-y-8"}>
								<button type="submit" className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-xs uppercase tracking-wide bg-primary text-white hover:bg-[#EA580C] shadow-sm">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AddAssetPage;
