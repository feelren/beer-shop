import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Main/Shop";
import Sidebar from "./components/Sidebar/Sidebar";
import {useSelector} from "react-redux";
import ProductModal from "./components/Modals/ProductModal";
import {Redirect, Route} from "react-router-dom";
import Cart from "./components/Main/Cart";

function App() {
	const isProductModalActive = useSelector((state) => state.main.isProductModalActive);
	const isFetching = useSelector((state) => state.main.isFetching);

	return (
		<div className="app">
			<Redirect to="/beer-shop/shop" />
			<Header />
			<Sidebar />
			<div className="main">
				<Route path="/beer-shop/shop" render={() => <Shop />} />
				<Route path="/beer-shop/cart" render={() => <Cart />} />
			</div>
			{isProductModalActive && !isFetching ? <ProductModal /> : null}
		</div>
	);
}

export default App;

// Реализовать закрытие модалки по клику вне его
