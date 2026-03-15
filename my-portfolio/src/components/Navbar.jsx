import logo from "../assets/img/logo.png"

function Navbar() {
    return(
        <nav className="navbar flex justify-between items-center bg-black/30 backdrop-blur-sm py-5">
            <div className="flex items-center gap-2">
                <img className="w-32" src={logo} alt="Logo" />
            </div>
            <ul className="flex gap-6">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar