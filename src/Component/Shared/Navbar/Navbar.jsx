import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleSignOut = async () => {
        try {

            await logOut()
            alert("log out")

        } catch (err) {
            // If signIn fails, show error alert
            alert(err.message);
        }

    }

    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {/* <li><NavLink to={'/about'}>About</NavLink></li> */}
        {user?.email ?
            <>
                <li><NavLink to={'/booking'}>Booking</NavLink></li>
                <li onClick={handleSignOut}><Link>log Out</Link></li>
            </> :
            <li><NavLink to={'/login'}>Login</NavLink></li>

        }
    </>


    return (
        <div>
            <div className="navbar bg-base-200 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="">
                        <img src={logo} alt="" className='h-16' />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-orange-500 border border-orange-500">Appointmant</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;