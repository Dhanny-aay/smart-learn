import { motion } from "framer-motion";
import menu from './menu.png'

const anime = () => {
    return ( 
        <div className=" w-[100%] h-[100vh] flex justify-center items-center relative bg-[#f1f1f1f] ">
            <div className=" absolute top-5 right-5">
                <img src={ menu } className='' alt="" />
            </div>
            <div className=" justify-center items-center flex flex-col text-[#160e4d] space-y-10 font-poppins font-semibold text-lg">
                <p>Dashboard</p>
                <p>My Class</p>
                <p>Instructors</p>
                <p>Courses</p>
                <p>Group Chats</p>
                <p>Settings</p>
            </div>
        </div>

     );
}
 
export default anime;