import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={logo} alt="logo" style={{width:'90px'}}/>
        </div>
        {/* menu */}
        <div>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </div>

        {/* hamburguer */}
    </div>
  )
}

export default Navbar