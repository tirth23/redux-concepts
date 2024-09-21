import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";
import React from "react";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BookContainer />
			</div>
		</Provider>
	);
}

export default App;
