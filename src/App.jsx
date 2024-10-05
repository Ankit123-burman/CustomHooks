import { useEffect, useState } from 'react'
import useFetch from './assets/useFetch'
import './App.css'


const Box = ({data})=>{
  return(
    <div className="container w-full flex mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="p-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
        </div>
        <div className="p-4 flex-grow">
          <p className="text-gray-600">{data.url}</p>
        </div>
        <div className="p-4 bg-gray-50">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
            Click me
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
  const {data , loading, error} = useFetch(BASE_URL);

  useEffect(()=>{
    console.log(data)  
  },[data])
  
  return (
    <>
      <div>
        <h1 >coustom Hooks</h1>
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error: somthing want wrong</h1>}
        {data?.length>0 && (
          <div>
            {data.map((item,index)=>(
            <Box key={index} data={item}/>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default App
