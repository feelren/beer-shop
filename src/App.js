import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Main/Shop";
import Sidebar from "./components/Sidebar/Sidebar";
import {Redirect, Route} from "react-router-dom";
import Cart from "./components/Main/Cart";

function App() {
	return (
		<div className="app">
			<Redirect to="/shop" />
			<Header />
			<Sidebar />
			<div className="main">
				<Route path="/shop" render={() => <Shop />} />
				<Route path="/cart" render={() => <Cart />} />
			</div>
		</div>
	);
}

export default App;

// Реализовать закрытие модалки по клику вне его
