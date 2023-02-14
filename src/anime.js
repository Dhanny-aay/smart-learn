import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import menu from './menu.png'

const anime = () => {
    return ( 
        <motion.div

            initial={{  y:-650 }}
            transition={{ type:'spring', stiffness:30, duration:0.1 }}
            animate={{ y:0 }}
            exit={{ y:650 }}

            className=" w-[100%] h-[100vh] flex justify-center items-center relative bg-[#f1f1f1f] ">
            <div className=" absolute top-7 right-7">
                <Link to='/'>
                    <img src={ menu } className='' alt="" />
                </Link>
            </div>
            <div className=" justify-center items-center flex flex-col text-[#160e4d] space-y-10 font-poppins font-semibold text-lg">
                <p>Dashboard</p>
                <p>My Class</p>
                <p>Instructors</p>
                <p>Courses</p>
                <p>Group Chats</p>
                <p>Settings</p>
            </div>
        </motion.div>

     );
}
 
export default anime;