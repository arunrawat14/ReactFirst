import React, { useState } from 'react';
import Card from './Card'

const Cards = ({courses,category}) => {

  const [likedCourses, setLikedCourses] = useState([]);

  function getallcourse() {

    if(category === "All") {
      let allCourses = [] ;
      Object.values(courses).forEach( array => {
        array.forEach(coursedata=> {
          allCourses.push(coursedata);
      })
    })
      return allCourses;
    }
    else {
      return courses[category];
    }

    
  }

  return (
    <div className='flex flex-wrap gap-10 justify-center py-8 '>

       {
          getallcourse().map((course)=>{
            return (
              <Card course = {course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            )
          })
       }
      
    </div>
  )
}

export default Cards
