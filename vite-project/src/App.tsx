import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./context/AuthProvider";


export default function App() {
	return (
		<div className="hero">
			<AuthProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/auth" element={<AuthPage />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}
