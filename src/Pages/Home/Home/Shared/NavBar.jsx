// import {AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const NavBar = () => {

   const {user,logOut} = useContext(AuthContext);

   const handleLogOut =() =>{
      logOut()
      .then(()=>{})
      .catch(error => console.log(error))
   }

    return (
        <div className="mx-w-[1240px] mx-auto flex justify-between">
            <div>
               <div>
               <Link to='/'>
               <img width="70" height="70" src={logo} alt="" />
               </Link>
               </div>
            </div>

            {/* middle */}
            <div>
                <ul className="flex gap-6 pt-4">
                    <li><Link to='/'>Home</Link></li>
                    <li>About</li>
                
                {user?.email ? <>
                    <li><Link to='/bookings'>My Bookings</Link></li> 
                    <li><button onClick={handleLogOut}>LogOut</button></li> 
                </>
                : <li className='text-orange-600'><Link to='/login'>LogIn</Link></li>
                }
                    
                </ul>
            </div>

           {/* ending */}
            <div className='flex gap-4 '>
              <div className='flex gap-4 pt-4'>
              {/* <AiOutlineSearch size={20}></AiOutlineSearch>
              <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart> */}
              </div>
              <div>
              <button className="btn btn-outline btn-error">Appointment</button>
              </div>
            </div>
        </div>
    );
};

export default NavBar;