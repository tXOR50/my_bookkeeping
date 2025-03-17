import { Link } from "react-router-dom"

type Navbarprops = {
    koin: number;
}

export default function Navbar({koin} : Navbarprops){
    return (
        <>
            <header>
                <Link to="/">FINCBOOK</Link>
                <nav>
                    <ul className="navbar_list">
                        <Link to="/income"> Income </Link>
                        <Link to="/expense"> Expense </Link>
                        <Link to="/chart"> Chart </Link>
                        <Link to="/table"> Table </Link>
                        <div className="koin_cont">
                            <p> Coin : {koin} </p>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}