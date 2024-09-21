import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book } from "./BookAction";

function BookContainer() {
	// @ts-ignore
	const NoOfBooks = useSelector((stat) => stat.NumberOfBooks);
	const dispatch = useDispatch();

	return (
		<>
			<div>BookContainer</div>
			<h2>No of Books : {NoOfBooks}</h2>
			<button onClick={() => dispatch(purchase_book())}>Buy Book</button>
		</>
	);
}

export default BookContainer;
