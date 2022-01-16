import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<div id="LoginPage">
			<h1>LoginPage</h1>

			<Link to="/app">
				Go to Home
			</Link>
		</div>
	);
};

export default LoginPage;
