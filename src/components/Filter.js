import React from 'react'

const Filter = ({filterData,setCategory, category}) => {

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className='flex justify-center mx-auto space-x-4 gap-y-4 flex-wrap max-w-max w-11/12 py-4 ' >

      {
        filterData.map((data)=> {
          return(
          <button className={`text-lg px-2 py-1 rounded-md font-medium 
          text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 
            ${category === data.title ? "bg-opacity-60 border-white " : " bg-opacity-40  border-transparent"}
          `} onClick={() => filterHandler(data.title)} key={data.id} >
             {data.title}
           </button>
            )
        })
      }
      
    </div>
  )
}

export default Filter;


/*${
  category === data.title 
  ? "bg-opacity-60 border-white"
  : "bg-opacity-40 border-transpareent"
} */