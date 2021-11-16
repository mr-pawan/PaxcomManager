import styles from './UnAuthNavbar.module.css';
import Link from 'next/link'
const UnAuthNavbar = () => {
return(
    <>
        <div className={`${styles.nav}`}>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="https://paxcom.ai/" target='_blank' rel="noreferrer">
                    <a>Paxcom</a>
                </Link>
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      
                      <li className="nav-item">
                        <Link className="nav-link" href="https://paxcom.ai/" target='_blank' rel="noreferrer"><a>About</a></Link>
                      </li>
                    
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" href="/login"><a>SIGN&nbsp;IN</a></Link>
                        </li>
                      
                        <li className="nav-item">
                        <Link className="nav-link" href="/register"><a>SIGN&nbsp;UP</a></Link>
                      </li>
                       
                    </ul>
                </div>
            </div>

        </nav>
        </div>
    </>
)
}

export default UnAuthNavbar;