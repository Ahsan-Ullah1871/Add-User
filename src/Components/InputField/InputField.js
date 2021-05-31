import React, { useState } from "react";
import "./InputField.css";
const axios = require("axios").default;

const InputField = () => {
	const [userData, setUserData] = useState([]);
	const nameBlur = (e) => {
		setUserData({ name: e.target.value });
	};
	const emailBlur = (e) => {
		setUserData({ ...userData, email: e.target.value });
	};
	console.log(userData);
	const addUserHandler = (e) => {
		e.preventDefault();
		console.log(userData);
		axios.post("https://aqueous-shore-00892.herokuapp.com/addUser", {
			...userData,
		})
			.then(function (response) {
				if (response.data == "Ache") {
					alert("This email is added before");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<form className="InputBox" onSubmit={addUserHandler}>
				<div>
					<label for="name">User Name</label>
					<input
						type="text"
						placeholder="Name"
						id="name"
						required
						onBlur={(e) => nameBlur(e)}
					/>
				</div>
				<div>
					<label for="name">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						required
						onBlur={(e) => emailBlur(e)}
					/>
				</div>
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default InputField;
