import { Link } from "react-router-dom";

const ServersPage = () => {
	return (
		<div id="ServersPage">
			<h1>ServersPage</h1>

			<Link to="/login">
				Go to Login
			</Link>

			<Link to="/app">
				Go to Home Page
			</Link>
		</div>
	);
};

export default ServersPage;

