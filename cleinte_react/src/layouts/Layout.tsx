import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function layout(){
    return(
        <>
            {/* nav */}
            <NavBar/>
            {/* conteido principal */}
            <main className="conatiner-fluid">
                <Outlet/>
            </main>

        </>
    )
}