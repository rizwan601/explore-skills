import Link from 'next/link'

function Navbar() {

  return (
    <nav >
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
               
                <i className="fa fa-times" onClick="hideMenu()"></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/course">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick="showMenu()"></i>
        
        </nav>
  )
}

export default Navbar