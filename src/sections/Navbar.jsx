import {useState} from "react";
import {navLinks} from "../constants/index.js";

const NavItems = () =>{
    return(
        <ul className="nav-ul text-white">
            {
                navLinks.map(({name, id, href}) => (
                    <li key={id} className="nav-li">
                        <a className="nav-li_a" href={href} onClick={()=>{}}>{name}</a>
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Ruhan</a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                        <img src={isOpen ? "/assets/close.svg":"/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Navbar