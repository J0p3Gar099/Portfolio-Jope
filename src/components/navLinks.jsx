"use client"
import Link from "next/link";
const { usePathname } = require("next/navigation")

const NavLinks = ({link}) =>{
    const pathName = usePathname()
    

    return(
        <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
            {link.title}
        
        </Link>

    )

}

export default NavLinks