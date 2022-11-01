import {Link, Outlet} from "react-router-dom";

export default function Expenses () {
    return (
        <div>
            <h2>Expenses</h2>
            <p>Paragraphe EXPENSES</p>
            <Link to="/expenses/subroute">Lien subroute expenses</Link>
            <Outlet></Outlet>
        </div>
    )
}

