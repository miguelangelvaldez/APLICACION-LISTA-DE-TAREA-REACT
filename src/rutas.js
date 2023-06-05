import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CarContent";
import { createBrowserRouter } from "react-router-dom";

const rutas = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/cart",
		element: <CartContent />,
	},
]);

export default rutas;