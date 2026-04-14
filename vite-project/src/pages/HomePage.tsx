import { AsteriskSquare, LayoutDashboardIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Leftbar from "../components/Leftbar";

export default function HomePage() {
	return (
		<div className={"flex"}>
				<Navbar />
				<Leftbar />

			<section className=" py-25 px-10  flex h-full">
				<div className="">
					<div className="flex gap-3">
						<LayoutDashboardIcon />
						<h1>Dashboard</h1>
					</div>

					<div className="flex gap-4 py-18">
						<div className="bg-amber-100 w-50 px-6 py-6 shadow-xl rounded">
							<div className="flex gap-2">
								<AsteriskSquare />
								<p>Total Asset</p>
							</div>
							<p className=" flex justify-center items-center">
								2
							</p>
						</div>
						<div className="bg-amber-100 w-50 px-6 py-6 shadow-xl rounded">
							<div className="flex gap-2">
								<AsteriskSquare />
								<p>Active Assignments</p>
							</div>
							<p className=" flex justify-center items-center">
								2
							</p>
						</div>
						<div className="bg-amber-100 w-50 px-6 py-6 shadow-xl rounded">
							<div className="flex gap-2">
								<AsteriskSquare />
								<p>Asset Maintenance</p>
							</div>
							<p className=" flex justify-center items-center">
								2
							</p>
						</div>
						<div className="bg-amber-100 w-50 px-6 py-6 shadow-xl rounded">
							<div className="flex gap-2">
								<AsteriskSquare />
								<p>Available Assets</p>
							</div>
							<p className=" flex justify-center items-center">
								2
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-10">
						<div className=" bg-background/90 backdrop-blur-sm border-b border-black/5 shadow-xl">
							<h2 className="px-2 py-2">Recent Added Assets</h2>
							<div className="grid grid-cols-3  gap-3 bg-cyan-300">
								<h1 className=" rounded bg-cyan-500">Name</h1>
								<h1 className=" rounded bg-cyan-500">Category</h1>
								<h1 className=" rounded bg-cyan-500">Status</h1>
						
							</div>
							<div className="grid grid-cols-3 gap-8">
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									<p>123</p>
								</div>
								<div className="flex justify-center items-center">
									<p>IT equpment</p>
								</div>
								<div className="flex justify-center items-center">
									<h2>Assigned</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									<p>123</p>
								</div>
								<div className="flex justify-center items-center">
									<p>IT equpment</p>
								</div>
								<div className="flex justify-center items-center">
									<h2>Assigned</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									<p>123</p>
								</div>
								<div className="flex justify-center items-center">
									<p>IT equpment</p>
								</div>
								<div className="flex justify-center items-center">
									<h2>Assigned</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									<p>123</p>
								</div>
								<div className="flex justify-center items-center">
									<p>IT equpment</p>
								</div>
								<div className="flex justify-center items-center">
									<h2>Assigned</h2>
									
								</div>
							</div>
						
						</div>
						<div className=" bg-background/90 backdrop-blur-sm border-b border-black/5 shadow-xl">
							<h2 className="px-2 py-2">Recent Assignments</h2>
							<div className="grid grid-cols-3  gap-3 bg-cyan-300">
								<h1 className=" rounded bg-cyan-500">Asset</h1>
								<h1 className=" rounded bg-cyan-500">Assigned To</h1>
								<h1 className=" rounded bg-cyan-500">Date</h1>
						
							</div>
							<div className="grid grid-cols-3 gap-8">
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									
								</div>
								<div className="flex justify-center items-center">
									<p>Goodluck</p>
								</div>
						
								<div className="flex flex-col justify-center items-center">
									<h2>09/11/2024</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									
								</div>
								<div className="flex justify-center items-center">
									<p>Goodluck</p>
								</div>
						
								<div className="flex flex-col justify-center items-center">
									<h2>09/11/2024</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									
								</div>
								<div className="flex justify-center items-center">
									<p>Goodluck</p>
								</div>
						
								<div className="flex flex-col justify-center items-center">
									<h2>09/11/2024</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									
								</div>
								<div className="flex justify-center items-center">
									<p>Goodluck</p>
								</div>
						
								<div className="flex flex-col justify-center items-center">
									<h2>09/11/2024</h2>
									
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2>Laptop</h2>
									
								</div>
								<div className="flex justify-center items-center">
									<p>Goodluck</p>
								</div>
						
								<div className="flex flex-col justify-center items-center">
									<h2>09/11/2024</h2>
									
								</div>
								
							</div>
						
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
