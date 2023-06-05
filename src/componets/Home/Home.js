import Naybar from "./Naybar/Naybar";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
	return (
		<>
			<Naybar />
			<Banner />
			<div className="product-card-container">
				<Products />
			</div>
		</>
	);
};

export default Home;
