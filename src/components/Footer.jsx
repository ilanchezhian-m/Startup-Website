
export function Footer(){

    const date = new Date();
    const year = date.getFullYear();
    
    return(
        <>
        <footer>
         <p className="text-center mt-3 text-xs md:text-base flex-wrap font-black mb-3"> © {year} Copyright:Designed and Developed by TAS INNOVATION | ALL RIGHTS RESERVED</p>
         </footer>
        </>
    )
}