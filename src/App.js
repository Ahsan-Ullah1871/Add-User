import "./App.css";
import InputField from "./Components/InputField/InputField";
import UserTable from "./Components/Table/UserTable";

function App() {
	return (
		<div className="App">
			<h1 className="header">Add Your Favorite People</h1>
			<InputField />
			<UserTable />
		</div>
	);
}

export default App;
