import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const Cartcontent = () => {
	const { cart } = useContext(dataContext);

	return cart.length > 0 ? (
		<>
			<CartElements />;
			<CartTotal />
		</>
	) : (
		<h2 className="cart-message-center">Tu Carrito Esta Vacio</h2>
	);
};

export default Cartcontent;
