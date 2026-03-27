
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";



export default function App() {
	return (
		<div className="hero">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/auth" element={<AuthPage />} />
			</Routes>
		</div>
	);
}
