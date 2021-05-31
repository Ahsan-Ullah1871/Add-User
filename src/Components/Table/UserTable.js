import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./Table.css";

const UserTable = () => {
	const [users, setUsers] = useState(null);
	useEffect(() => {
		axios.get("https://aqueous-shore-00892.herokuapp.com/getUser")
			.then(function (response) {
				// handle success
				console.log(response.data);
				setUsers(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [users]);
	console.log(users);
	const deleteHandle = (id) => {
		axios.delete(
			`https://aqueous-shore-00892.herokuapp.com/deleteUser/${id}`
		);
	};

	return (
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{users ? (
					users?.map((user) => {
						return (
							<tr>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									<button
										onClick={() =>
											deleteHandle(
												user._id
											)
										}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td>...</td>
						<td>..</td>
						<td>...</td>
					</tr>
				)}
			</tbody>
		</Table>
	);
};

export default UserTable;
