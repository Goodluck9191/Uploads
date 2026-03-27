import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

export default function App() {
	return (
		<div className="hero">
			<AuthProvider>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/auth"
						element={
							<PublicRoute>
								<AuthPage />
							</PublicRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</div>
	);
}
