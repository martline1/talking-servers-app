import { render }       from "react-dom";
import { MemoryRouter } from "react-router-dom";

// Import Own Components
import App from "./App.jsx";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");

render(
	<MemoryRouter>
		<App />
	</MemoryRouter>,
	rootElement
);
