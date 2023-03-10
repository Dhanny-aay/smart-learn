import logo from './logo.png';
import menu from './menu.png';
import eli from './Eli.png';
import edu from './edu.png';
import per from './per.png';
import ilus from './ilus.png';
import ilusii from './illus2.png';
import ilusiii from './illus3.png';
import courses from './courses.png';
import go from './go.png';
import play from './play.png';
import dots from './3dots.png';
import insi from './ins1.png';
import insii from './ins2.png';
import insiii from './ins3.png';
import insiv from './ins4.png';
import bio from './bio.png';
import chat from './chat.png';
import col from './col.png';
import logotab from './logotab.png';
import marks from './marks.png';
import menutab from './menutab.png';
import set from './set.png';
import mail from './mail.png';
import noti from './noti.png';
import trate from './trate.png';
import Graph from './graph';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const home = () => {
    return ( 
        
        <div className="">
                <motion.div
                    animate={{ x:0, }}
                    initial={{ x:-100, }}
                    transition={{  type: 'spring', stiffness: 50,}}
                    className='bg-[#f1f1f1] hidden z-50 md:block fixed md:w-[85px] lg:w-[265px] h-full left-0 top-0 px-5 md:pt-14 lg:pt-7'>
                    <div className=' flex flex-col items-center '>
                        <span className=' flex flex-row items-center lg:space-x-1'>
                            <img src={ logotab } className=' lg:w-8' alt="" />
                            <motion.p animate={{  }} className=' hidden lg:block font-poppins text-[#160e4d] text-[20px] font-semibold lg:text-[18px]'>Smart Learning</motion.p>
                        </span>
                        <span className=' flex flex-col items-center md:mt-14 lg:mt-5 md:space-y-8 lg:space-y-2 lg:items-start'>
                            <button className=' p-3 hover:bg-white hover:rounded-[10px] lg:hover:rounded-[30px] lg:px-5 hover:shadow transition-all flex flex-row items-center lg:space-x-2'>
                                <img src={ menutab } className=' lg:w-5' alt="" />
                                <p className='hidden lg:block font-poppins text-[16px] font-semibold text-[#160e4d]'>Dashboard</p>
                            </button>
                            <button className=' p-3 hover:bg-white hover:rounded-[10px] hover:shadow transition-all flex flex-row items-center lg:space-x-2 lg:hover:rounded-[30px] lg:px-5'>
                                <img src={ marks } className=' lg:w-5' alt="" />
                                <p className='hidden lg:block font-poppins text-[16px] font-semibold text-[#160e4d]'>My Class</p>
                            </button>
                            <button className=' p-3 hover:bg-white hover:rounded-[10px] hover:shadow transition-all flex flex-row items-center lg:space-x-2 lg:hover:rounded-[30px] lg:px-5'>
                                <img src={ bio } className=' lg:w-5' alt="" />
                                <p className='hidden lg:block font-poppins text-[16px] font-semibold text-[#160e4d]'>Instructors</p>
                            </button>
                            <button className=' p-3 hover:bg-white hover:rounded-[10px] hover:shadow transition-all flex flex-row items-center lg:space-x-2 lg:hover:rounded-[30px] lg:px-5'>
                                <img src={ col } className=' lg:w-5' alt="" />
                                <p className='hidden lg:block font-poppins text-[16px] font-semibold text-[#160e4d]'>Courses</p>
                            </button>
                            <button className=' p-3 hover:bg-white hover:rounded-[10px] hover:shadow transition-all flex flex-row items-center lg:space-x-2 lg:hover:rounded-[30px] lg:px-5'>
                                <img src={ chat } className=' lg:w-5' alt="" />
                                <p className='hidden lg:block font-poppins text-[16px] font-semibold text-[#160e4d]'>Group chats</p>
                            </button>
                            <button className=' md:absolute lg:static bottom-4 md:border-t lg:border-none border-[#160e4d] md:py-5 lg:py-3 px-3 hover:bg-white hover:rounded-[10px] hover:shadow transition-all flex flex-row items-center lg:space-x-2 lg:hover:rounded-[30px] lg:px-5'>
                                <img src={ set } className=' lg:w-5' alt="" />
                                <p className='hidden lg:block font-poppins text-[16px] font-semibold text-[#160e4d]'>Settings</p>
                            </button>

                        </span>
                        <div className='hidden lg:block lg:absolute bottom-6 mx-5 h-[250px] lg:mt-[5%] w-[220px] bg-[#8eb8e5] rounded-[30px] relative'>
                            <img src={ trate } className='w-[190px] absolute left-[15px] -top-[15px]' alt="" />
                            <button className=' bg-opacity-50 rounded-[15px] px-4 py-2 text-[10px] font-poppins font-medium bottom-3 absolute left-[65px] bg-[#fafafa]'>Join Courses</button>
                        </div>
                    </div>     

                </motion.div>
            <motion.div 
                    animate={{ y:0, }}
                    initial={{ y: -250, }}
                    transition={{  type: 'spring', stiffness: 50, duration:0.2,}}
                className=" navbar py-6 flex justify-between px-4 md:pr-8 md:ml-[110px]  md:hidden bg-white">
                <span className=" flex justify-center items-center space-x-1">
                    <img src={ logo } className='' alt="" />
                    <p className=" font-poppins font-semibold text-[20px] text-[#160e4d]">Smart Learning</p>
                </span>
                <Link to='/nav'>
                    <img src={ menu } className='' alt="" />
                </Link>
            </motion.div>

            <motion.div 
                    animate={{ y:0, }}
                    initial={{ y: -250, }}
                    transition={{  type: 'spring', stiffness: 50, duration:0.2,}}
                className=' mt-4 px-4 flex justify-between items-center md:pr-8 md:ml-[110px] lg:ml-[275px] md:mt-[40px] lg:mt-[20px]'>
                <input type="search" name="" className=' font-poppins h-[40px] text-[rgba(22,14,77,0.5)] px-5 py-2 bg-[#f1f1f1] rounded-[22px]' placeholder='Search for Query' id="" />

                <span className='hidden md:flex flex-row items-center space-x-8'>
                        <img src={ mail } className='' alt="" />
                        <img src={ noti } className='' alt="" />
                </span>

                <span className='hidden md:flex flex-row p-3 space-x-2 bg-white rounded-[20px] shadow-md'>
                    <img src={ eli } className='' alt="" />
                    <span className=' flex-col flex'>
                        <p className=' text-sm'>VEEk</p>
                        <p className=' text-[10px]'>@veekdesign</p>
                    </span>
                </span>

            </motion.div>

            <motion.div
                animate={{ y:0, }}
                initial={{ y:400, }}
                transition={{  type: 'spring', stiffness: 50, duration:0.2,}}
                className=' mt-[30px] px-5 md:pr-8 md:ml-[110px] lg:ml-[275px] '>
                <div>
                    <p className=' font-poppins font-medium text-[20px] text-[#160e4d]'>Analytics Overview</p>
                    <div className=' w-full rounded-[22px] md:h-[300px] mt-4 px-5 md:px-11 py-6 md:py-10 bg-[#2708a0] relative flex shadow'>
                        <div className=' z-10'>
                            <p className='text-white font-semibold text-[18px] w-[150px] md:w-full  md:text-[30px]'>Learn Effectively With Us!</p>
                            <p className='font font-light text-white font-poppins text-[10px] md:text-[13px]'>Get 30% Off every courses in January.</p>
                            <div className=' md:flex md:flex-row md:space-x-8 md:mt-12'>
                                <div className=' flex mt-[11px] space-x-2'>
                                    <img src={ edu } className='' alt="" />
                                    <span className=''>
                                        <p className=' text-white font-light text-[10px] font-poppins'>Students</p>
                                        <p className=' text-white font-light text-[10px] font-poppins'>50,000+</p>
                                    </span>
                                </div>

                                <div className=' flex mt-[11px] space-x-2'>
                                    <img src={ per } alt="" />
                                    <span className=''>
                                        <p className=' text-white font-light text-[10px] font-poppins'>Expert Mentors</p>
                                        <p className=' text-white font-light text-[10px] font-poppins'>500+</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src={ ilus } className=' md:hidden -bottom-[4px] right-2 absolute w-[60%] mb-0 pb-0' alt="" />
                        <img src={ ilusii } className=' hidden md:block lg:hidden -bottom-[6px] right-2 absolute w-[60%] mb-0 pb-0' alt="" />
                        <img src={ ilusiii } className=' hidden lg:block -bottom-[6px] right-2 absolute mb-0 pb-0 w-[450px]' alt="" />
                    </div>
                </div>
                
            </motion.div>

            <motion.div 
                animate={{ y:0, }}
                initial={{ y:400, }}
                transition={{  type: 'spring', stiffness: 80, duration:0.2,}}
                className=' mt-[22px] px-5 md:pr-8 md:ml-[110px] lg:ml-[275px] lg:flex lg:flex-row justify-between'>

                    <div className=' lg:w-[30%] lg:h-[350px]'>
                        <p className=' font-poppins font-medium text-[20px] text-[#160e4d]'>Current Activity</p>
                        <div className=' w-full rounded-[22px] mt-4 px-5 py-6 lg:py-2  bg-[#2708a0] shadow '>
                            <p className=' text-white font-semibold text-[18px]'>Monthly Progress</p>
                            <p className=' font-poppins font-medium text-white text-[10px]'>These are the latest improvements</p>
                            <Graph />
                        </div>

                        <div className=' mt-6 flex justify-between'>
                            <div className='  bg-[#8eb8e5] shadow rounded-[22px] p-5 relative w-[45%]'>
                                <p className=' font-poppins font-bold text-white text-[18px]'>45k+</p>
                                <p className=' font-poppins font-medium text-[10px] text-white'>Completed Courses</p>
                                <img src={ courses } className=' mt-5 w-14' alt="" />
                                <img src={ go } className=' absolute right-3 bottom-2' alt="" />
                            </div>

                            <div className=' bg-[#8eb8e5] shadow rounded-[22px] p-5 lg:px-5 lg:-py-2 relative w-[45%]'>
                                <p className=' font-poppins font-bold text-white text-[18px]'>20k+</p>
                                <p className=' font-poppins font-medium text-[10px] text-white'>Video Courses</p>
                                <img src={ play } className=' absolute right-3 bottom-2' alt="" />
                            </div>
                        </div>    
                    </div>

                    <div className=' mt-6 lg:mt-0 lg:w-[30%] lg:h-[350px]'>
                        <span className=' flex justify-between'>
                            <p className='font-poppins font-medium text-[20px] text-[#160e4d]'>Popular Courses</p>
                            <select name="courses" className=' border border-[#160e4d] text-[#160e4d] font-poppins font-normal text-[10px] items-center text-center rounded-[20px]' id="">
                                <option value="all">All Courses</option>
                                <option value="some">Some Courses</option>
                                <option value="nil">No Courses</option>
                            </select>
                        </span>

                        <div className=' mt-4 w-full bg-[#8eb8e5] bg-opacity-[0.15] shadow py-7 lg:h-[350px] rounded-[15px] flex flex-col space-y-[20px]'>
                            <motion.div 
                                whileHover={{
                                    scale:1.1,
                                }}
                                className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#ffcf2d]'></span>
                                <span className=' flex flex-col font-bold font-poppins text-[12px]'>
                                    <p className=' font-bold font-poppins text-[12px]'>Web Design</p>
                                    <p className=' font-medium font-poppins text-[10px]'>20+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#ffcf2d] font-poppins font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all'>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </motion.div>

                            <motion.div 
                                whileHover={{
                                    scale:1.1,
                                }}
                                className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#2708a0]'></span>
                                <span className=' flex flex-col font-bold font-poppins text-[12px]'>
                                    <p className=' font-bold font-poppins text-[12px]'>UI/UX Design</p>
                                    <p className=' font-medium font-poppins text-[10px]'>30+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#2708a0] font-poppins font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all'>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </motion.div>

                            <motion.div 
                                whileHover={{
                                    scale:1.1,
                                }}
                                className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#fe5244]'></span>
                                <span className=' flex flex-col font-bold font-poppins text-[12px]'>
                                    <p className=' font-bold font-poppins text-[12px]'>Web Design</p>
                                    <p className=' font-medium font-poppins text-[10px]'>40+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#fe5244] font-poppins font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all'>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </motion.div>

                            <motion.div 
                                whileHover={{
                                    scale:1.1,
                                }}
                                className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#3fb1b5]'></span>
                                <span className=' flex flex-col font-bold font-poppins text-[12px]'>
                                    <p className=' font-bold font-poppins text-[12px]'>UI/UX Design</p>
                                    <p className=' font-medium font-poppins text-[10px]'>80+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#3fb1b5] font-poppins font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all '>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </motion.div>

                        </div>
                    </div>

                <div className=' mt-5 lg:mt-0 lg:w-[30%]'>
                    <span className=' flex flex-row justify-between'>
                        <p className=' font-poppins font-medium text-[18px] text-[#160e4d]'>Best Instructors</p>
                        <p className=' font-poppins font-normal text-[14px] underline text-[#160e4d]'>See All</p>
                    </span>

                    <div className='mt-4 lg:h-[350px] bg-[#8eb8e5] bg-opacity-[0.15] shadow rounded-[15px] py-5 space-y-[25px]'>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insi } className=' w-14' alt="" />
                                <span className=' '>
                                    <p className=' font-poppins font-medium text-base '>Devon Lane</p>
                                    <p className=' font-poppins font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-poppins hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insii } className=' w-14' alt="" />
                                <span className=' '>
                                    <p className=' font-poppins font-medium text-base '>Albert Flores</p>
                                    <p className=' font-poppins font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-poppins hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insiii } className=' w-14' alt="" />
                                <span className=' '>
                                    <p className=' font-poppins font-medium text-base '>Jane Cooper</p>
                                    <p className=' font-poppins font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-poppins hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>

                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insiv } className=' w-14' alt="" />
                                <span className=' '>
                                    <p className=' font-poppins font-medium text-base '>Cody Fisher</p>
                                    <p className=' font-poppins font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-poppins hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>

                    </div>

                </div>

            </motion.div>

        </div>
     );
}
 
export default home;