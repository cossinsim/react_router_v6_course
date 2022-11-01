import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>LAYOUT APP</h1>
      <nav>
        <Link to="/">ACCUEIL APP</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
