import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Bottom } from "./Bottom"
import { Footer } from "./Footer"



export function Layout(){
    return(
        <>
        <Header />
        <main>
        <Outlet/>
        </main>
        <Bottom/>
            <Footer/>

        </>
    )
}