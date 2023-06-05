import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

import "./CartContent.css";

const CartElements = () => {
	const { cart, setCart } = useContext(dataContext);

	const deleteProduct = (id) => {
		const foundId = cart.find((elemnet) => elemnet.id === id);

		const newCart = cart.filter((elemnet) => {
			return elemnet !== foundId;
		});

		setCart(newCart);
	};
	return cart.map((product) => {
		return (
			<div className="cartContent" key={product.id}>
				<img src={product.img} alt="product-card" />
				<h3 className="name">{product.name}</h3>
				<CartItemCounter product={product} />
				<h4 className="price">{product.prince * product.quanty}$</h4>
				<h3
					className="cart-delete-button"
					onClick={() => deleteProduct(product.id)}
				>
					❌
				</h3>
			</div>
		);
	});
};

export default CartElements;
