import logo from "../assets/img/logo.png"

function Navbar() {
    return(
        <nav className="navbar flex justify-between items-center bg-black/40 backdrop-blur-sm py-2">
            <div className="flex items-center gap-2">
                <img className="size-10" src={logo} alt="Logo" />
                <h1 className="text-white">Ana Clara</h1>
            </div>
            <ul className="flex gap-6">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Navbar