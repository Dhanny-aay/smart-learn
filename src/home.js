import logo from './logo.png';
import menu from './menu.png';
import eli from './Eli.png';
import edu from './edu.png';
import per from './per.png';
import ilus from './ilus.png';
import courses from './courses.png';
import go from './go.png';
import play from './play.png';

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

                    </div>

                </div>

            </div>
                
            </div>
        </div>
     );
}
 
export default home;