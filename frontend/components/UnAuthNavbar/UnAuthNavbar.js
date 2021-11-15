import styles from './UnAuthNavbar.module.css';
const UnAuthNavbar = () => {
return(
    <>
        <div className={`${styles.nav}`}>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="https://paxcom.ai/" target='_blank'>
                    Paxcom
                </a>
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      
                      <li className="nav-item">
                        <a className="nav-link" href="https://paxcom.ai/" target='_blank'>About</a>
                      </li>
                    
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/login">SIGN&nbsp;IN</a>
                        </li>
                      
                        <li className="nav-item">
                        <a className="nav-link" href="/register">SIGN&nbsp;UP</a>
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