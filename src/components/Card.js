import React, { useState } from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
const Card = ({course,likedCourses,setLikedCourses}) => {

    const [buttonChange,setbuttonChange] = useState(false);
    function clickHandler() {

        if(likedCourses.includes(course.id)) {
          // pehle se liked hai 
          setLikedCourses((prev)=> prev.filter((cid) => (cid !== course.id)));
          toast.warning("Liked Removed");
          setbuttonChange(false);
        }
        else {
          //insert krna hai liked courses me 
          if(likedCourses.length === 0) {
            setLikedCourses([course.id]);
          }
          else {
            // non empty hai pehle se 
            setLikedCourses((prev)=> [...prev, course.id]);
          }
          toast.success("Liked Sucessfull");
          setbuttonChange(true);
        }
       // let response = likedCourses.filter(id !== course.id);
    }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>

      <div className='relative '>
        <img src={course.image.url} alt='' />
        <div className='absolute rounded-full h-[40px] w-[40px] bg-white right-2 bottom-[-15px]  flex justify-center'>
          <button className=''  onClick={clickHandler} >

            {
              buttonChange ? (<FcLike fontSize="1.75rem" />) : (< FcLikePlaceholder fontSize="1.75rem" />)
            }
             
          </button>
        </div>
      </div>
     
     <div className='p-4'>
      <p className='text-white font-semibold text-[1.1em] leading-6 '>{course.title}</p>
      <p className='mt-2 text-white'>

        {
          course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description) + "..."
        }
      </p>
     </div>
    </div>
  )
}

export default Card
