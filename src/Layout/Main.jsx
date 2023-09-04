import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer";
import NavBar from "../Pages/Home/Home/Shared/NavBar";



const Main = () => {
    return (
        <div className="mx-w-[1240px] mx-auto py-6 px-8">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;