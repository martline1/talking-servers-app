import {
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

// Import Own Components
import AppLayout   from "Components/AppLayout";
import LoginPage   from "./LoginPage";
import HomePage    from "./HomePage";
import ServersPage from "./ServersPage";

const Pages = () => (
	<Routes>
		<Route path="/login" element={<LoginPage />} />

		<Route path="/app" element={<AppLayout />}>
			<Route index element={<HomePage />} />

			<Route path="servers" element={<ServersPage />} />
		</Route>

		<Route path="*" element={<Navigate to="/app/servers" />} />
	</Routes>
);

export default Pages;
