import logo from "../assets/img/logo.png"

function Navbar() {
    return(
        <nav className="navbar flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm py-5">
            <div className="flex items-center gap-2">
                <img className="w-32" src={logo} alt="Logo" />
            </div>
            <ul className="flex gap-6">
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contacts">contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar