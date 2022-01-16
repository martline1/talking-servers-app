import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div id="HomePage">
			<h1>HomePage</h1>

			<Link to="/login">
				Go to Login
			</Link>

			<Link to="/app/servers">
				Go to Servers Page
			</Link>
		</div>
	);
};

export default HomePage;

