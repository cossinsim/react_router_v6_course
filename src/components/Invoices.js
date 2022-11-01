import {Link, Outlet} from "react-router-dom";

export default function Invoices () {
    return (
        <div>
            <h2>Invoices</h2>
            <p>Paragraphe INVOICES</p>
            <Link to="/invoices/123">Lien subroute invoices</Link>
            <Outlet></Outlet>
        </div>
    )
}

