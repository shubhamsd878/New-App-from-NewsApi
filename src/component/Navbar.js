// converting to function based
// remove {component} import
// change class to funtion and remove extends Component, add props to take parameters
// render not needed
// done

import {Link} from 'react-router-dom'
export default function Navbar(){
 return(
    <>  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold mx-3" to="/">NewsMonkey</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{margin:'auto'}} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" > 
                    <li className="nav-item ">
                    {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                    <Link className="nav-link" aria-current="page" to="/" >Home</Link>
                    </li>   
                    <li className="nav-item">
                    <Link className="nav-link" to="/general">General </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/business"> Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/health"> Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/science"> Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports"> Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/technology"> Technology</Link>
                    </li>
                    {/* businesse ntertainment general health science sports technology */}
                </ul>
                </div>
            </div>
        </nav>   
    </>
 )
}

