import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] =useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'Profile' },
        { id: 3, path: '/contact', name: 'Products' },
        { id: 4, path: '/products', name: 'Contact' },
        { id: 5, path: '/profile/:username', name: 'About' },
      ];
      
    return (
        <nav className="bg-green-600">
          
            <div className=" md:hidden text-2xl p-6 " onClick={()=> setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :   <AiOutlineMenu></AiOutlineMenu >
                }
                   
            </div >
            <ul className={`md:flex absolute md:static
            ${open ? 'top-16' : 'hidden'}
            bg-green-600 mx-4` }>
            {
                routes.map(route => <Link route={route}></Link>)
            }
            </ul>
           
        </nav>
    );
};

export default Navbar;