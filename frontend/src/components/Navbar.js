import {NavLink} from 'react-router-dom';
import "./Navbar.css";
export const Navbar=()=>{
    return(
        <>
        <header>
        <div className='container'>
            <div className='logo-brand'>
           <li> <NavLink to="/home">Home</NavLink></li>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/mycourses">Mypurchases</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signUp">SignUp</NavLink></li>
                </ul>
            </nav>
        </div>
        </header>
        </>
    )
}
export default Navbar;