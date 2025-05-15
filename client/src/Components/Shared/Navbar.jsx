import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    // const { balance } = useContext(PaidContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    };

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bills">Bills</Link></li>
        <li><Link to="/my-profile">My Profile</Link></li>
        {/* <li className="flex -mt-3"><Link to="/order/salad"><span className="">our shop </span><img className="w-16 h-12 " src="" alt="nthing" /></Link></li> */}
        {/* <li><Link to="/dashboard/usersHome">User Home</Link></li> */}


    </>

    return (
        <>
            <div className="
    fixed inset-x-0
    top-3 md:top-5
    w-full md:w-5/6
    mx-auto
    flex items-center justify-between
     px-2 md:p-1 md:min-h-12
    bg-[#e7ebeb] rounded-[45px] z-10
  ">
                <div className="navbar-start w-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex">
                        <a className="btn btn-ghost text-xl md:text-2xl cinzel ">Richter Restaurant  </a>

                        {/* <img src={newLogo} className="w-8 h-8 md:h-auto mt-1 md:mt-0 md:w-12 md:ml-5 rounded-full " alt="" /> */}
                        {/* <a className="btn btn-ghost text-xl md:text-3xl cinzel text-[#c3921e] hidden md:block">Mari<span className="text-[#0d4827]">Gold</span>  </a> */}
                        {/* {
                        user?.emailVerified === false ? <button className="btn btn-primary bg-red-600 text-white border-none hover:bg-red-800" onClick={handleVerify}>Verify</button> : ''
                    } */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex w-auto">
                    <ul className="menu menu-horizontal px-1 uppercase inter font-medium text-gray-600">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end w-auto ">
                    {
                        user ?
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <div className="avatar avatar-placeholder">
                                                <div className="w-8 md:w-10 rounded-full md:mr-4">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                        <div className="card-body">
                                            {/* <span className="text-info text-lg">Balance: {balance} TK</span> */}
                                            <div className="card-actions">
                                                <button onClick={handleLogout} className="btn btn-primary btn-block bg-[#c3921e] border-none ">Log Out</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="flex gap-1 md:gap-2 mr-2 md:mr-4">
                                <button className="text-white px-4 md:px-6 font-bold rounded-3xl text-xs md:text-base py-1 md:py-2 btn-neutral bg-[#c3921e] border-none "><Link to="/login">Login</Link></button>
                                <button className="text-white px-4 md:px-6 font-bold rounded-3xl text-xs md:text-base py-1 md:py-2 btn-neutral bg-[#c3921e] border-none "><Link to="/signup">register</Link></button>
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;