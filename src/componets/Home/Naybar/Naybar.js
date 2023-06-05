import "./Naybar.css";
import { Link } from "react-router-dom";
import TotalItems from "../../CartContent/TotalItems";

const Naybar = () => {
	return (
		<div className="nav-container">
			<nav className="naybar">
				<h1 className="naybar-logo">shop</h1>
				<Link className="seeCarrito" to={"/cart"}>
					🛒
					<TotalItems />
				</Link>
			</nav>
		</div>
	);
};

export default Naybar;
