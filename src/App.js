import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {filterData,apiUrl} from './data';
import Loading from './components/Loading';
import { toast } from "react-toastify";

function App() {

  const [courses,setCourses] = useState('');
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  //const count = 10;

  async function fetchdata() {
    try {

      let respose = await fetch(apiUrl);
      let output = await respose.json();

      // set courses 
      setCourses(output.data);

      setLoading(false);
    }
    catch(error) {
      toast.error("Network me dikkat hai tumhare");
    }
  }

  useEffect(()=> {
    fetchdata();
  },[])


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className=" ">
        <div>
          <Filter filterData = {filterData}   setCategory = {setCategory} category={category} />
        </div>
        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {
            loading ? (<Loading/>) : (<Cards courses = {courses} category= {category} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
