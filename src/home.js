import logo from './logo.png';
import menu from './menu.png';
import eli from './Eli.png';
import edu from './edu.png';
import per from './per.png';
import ilus from './ilus.png';
import courses from './courses.png';
import go from './go.png';
import play from './play.png';
import dots from './3dots.png';
import insi from './ins1.png';
import insii from './ins2.png';
import insiii from './ins3.png';
import insiv from './ins4.png';

const home = () => {
    return ( 
        <div className="">
            <div className=" navbar py-6 flex justify-between px-4 bg-white">
                <span className=" flex justify-center items-center space-x-1">
                    <img src={ logo } className='' alt="" />
                    <p className=" font-sans font-semibold text-[20px] text-[#160e4d]">Smart Learning</p>
                </span>
                <img src={ menu } className='' alt="" />
            </div>

            <div className=' mt-4 px-4 flex justify-between'>
                <input type="search" name="" className=' font-sans h-[40px] text-[rgba(22,14,77,0.5)] px-5 py-2 bg-[#f1f1f1] rounded-[22px]' placeholder='Search for Query' id="" />

            </div>

            <div className=' mt-[30px] px-5 '>
                <div>
                    <p className=' font-sans font-medium text-[20px] text-[#160e4d]'>Analytics Overview</p>
                    <div className=' w-full rounded-[22px] mt-4 px-5 py-6 bg-[#2708a0] relative flex'>
                        <div className=' z-50'>
                            <p className='text-white font-semibold text-[18px] '>Learn Effectively<br></br>With Us!</p>
                            <p className='font font-light text-white font-sans text-[10px]'>Get 30% Off every courses in January.</p>
                            <div className=''>
                                <div className=' flex mt-[11px] space-x-2'>
                                    <img src={ edu } alt="" />
                                    <span className=''>
                                        <p className=' text-white font-light text-[10px] font-sans'>Students</p>
                                        <p className=' text-white font-light text-[10px] font-sans'>50,000+</p>
                                    </span>
                                </div>

                                <div className=' flex mt-[11px] space-x-2'>
                                    <img src={ per } alt="" />
                                    <span className=''>
                                        <p className=' text-white font-light text-[10px] font-sans'>Expert Mentors</p>
                                        <p className=' text-white font-light text-[10px] font-sans'>500+</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img src={ ilus } className=' bottom-0 right-0 absolute w-[60%] mb-0 pb-0' alt="" />
                    </div>
                </div>
                
            </div>

            <div className=' mt-[22px] px-5'>
                <div className=' flex-col'>
                    <div>
                        <p className=' font-sans font-medium text-[20px] text-[#160e4d]'>Current Activity</p>
                        <div className=' w-full rounded-[22px] mt-4 px-5 py-6 bg-[#2708a0] h-[185px]'>
                            <p className=' text-white font-semibold text-[18px]'>Monthly Progress</p>
                            <p className=' font-sans font-medium text-white text-[10px]'>These are the latest improvements</p>
                        </div>

                        <div className=' mt-6 flex justify-between'>
                            <div className='  bg-[#8eb8e5] rounded-[22px] p-5 relative w-[45%]'>
                                <p className=' font-sans font-bold text-white text-[18px]'>45k+</p>
                                <p className=' font-sans font-medium text-[10px] text-white'>Completed Courses</p>
                                <img src={ courses } className=' mt-5' alt="" />
                                <img src={ go } className=' absolute right-3 bottom-2' alt="" />
                            </div>

                            <div className=' bg-[#8eb8e5] rounded-[22px] p-5 relative w-[45%]'>
                                <p className=' font-sans font-bold text-white text-[18px]'>20k+</p>
                                <p className=' font-sans font-medium text-[10px] text-white'>Video Courses</p>
                                <img src={ play } className=' absolute right-3 bottom-2' alt="" />
                            </div>
                    </div>

                    <div className=' mt-6'>
                        <span className=' flex justify-between'>
                            <p className='font-sans font-medium text-[20px] text-[#160e4d]'>Popular Courses</p>
                            <select name="courses" className=' border border-[#160e4d] text-[#160e4d] font-sans font-normal text-[10px] text-center rounded-[20px]' id="">
                                <option value="all">All Courses</option>
                                <option value="some">Some Courses</option>
                                <option value="nil">No Courses</option>
                            </select>
                        </span>

                        <div className=' mt-3 w-full bg-[#f1f1f1] py-7  rounded-[15px] flex flex-col space-y-[20px]'>
                            <div className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#ffcf2d]'></span>
                                <span className=' flex flex-col font-bold font-sans text-[12px]'>
                                    <p className=' font-bold font-sans text-[12px]'>Web Design</p>
                                    <p className=' font-medium font-sans text-[10px]'>20+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#ffcf2d] font-sans font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all'>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </div>

                            <div className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#2708a0]'></span>
                                <span className=' flex flex-col font-bold font-sans text-[12px]'>
                                    <p className=' font-bold font-sans text-[12px]'>UI/UX Design</p>
                                    <p className=' font-medium font-sans text-[10px]'>30+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#2708a0] font-sans font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all'>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </div>

                            <div className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#fe5244]'></span>
                                <span className=' flex flex-col font-bold font-sans text-[12px]'>
                                    <p className=' font-bold font-sans text-[12px]'>Web Design</p>
                                    <p className=' font-medium font-sans text-[10px]'>40+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#fe5244] font-sans font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all'>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </div>

                            <div className=' flex items-center justify-between hover:bg-white hover:rounded-[25px] h-[79px] px-3 hover:shadow transition-all delay-200'>
                                <span className=' h-[40px] w-[40px] rounded-[15px] bg-[#3fb1b5]'></span>
                                <span className=' flex flex-col font-bold font-sans text-[12px]'>
                                    <p className=' font-bold font-sans text-[12px]'>UI/UX Design</p>
                                    <p className=' font-medium font-sans text-[10px]'>80+ Courses</p>
                                </span>
                                <button className=' px-4 py-2 bg-[#3fb1b5] font-sans font-medium text-xs bg-opacity-20 text-center hover:text-white hover:bg-opacity-100 rounded-[20px] transition-all '>View Course</button>
                                <img src={ dots } className='' alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className=' mt-5'>
                    <span className=' flex flex-row justify-between'>
                        <p className=' font-sans font-medium text-[18px] text-[#160e4d]'>Best Instructors</p>
                        <p className=' font-sans font-normal text-[14px] underline text-[#160e4d]'>See All</p>
                    </span>

                    <div className=' bg-[#f1f1f1] rounded-[15px] py-5 space-y-[25px]'>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insi } className='' alt="" />
                                <span className=' '>
                                    <p className=' font-sans font-medium text-base '>Devon Lane</p>
                                    <p className=' font-sans font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-sans hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insii } className='' alt="" />
                                <span className=' '>
                                    <p className=' font-sans font-medium text-base '>Albert Flores</p>
                                    <p className=' font-sans font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-sans hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insiii } className='' alt="" />
                                <span className=' '>
                                    <p className=' font-sans font-medium text-base '>Jane Cooper</p>
                                    <p className=' font-sans font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-sans hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>
                        <div className=' flex justify-between px-5 items-center'>
                            <div className=' flex flex-row items-center justify-between space-x-2'>
                                <img src={ insiv } className='' alt="" />
                                <span className=' '>
                                    <p className=' font-sans font-medium text-base '>Cody Fisher</p>
                                    <p className=' font-sans font-medium text-xs'>5 Design Courses</p>
                                </span>
                            </div>
                            <button className=' border border-[rgba(22,14,77,0.4)] rounded-[10px] px-3 h-[30px] text-[rgba(0,0,0,0.7)] font-normal text-[10px] font-sans hover:bg-[#2708a0] transition-all hover:text-white'>Courses</button>
                        </div>

                    </div>

                </div>

            </div>

            </div>
        </div>
     );
}
 
export default home;