import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // const [data,setdata] = React.useState([]);
  // useEffect(() => {fetch('https://api.github.com/users/SavithaSreeL')
  //   .then((response) => response.json())
  //   .then(data => {console.log(data)
  // setdata(data)} )

  // },[]
  //   )


  return (
    <div className='min-h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 py-10 text-white flex justify-center' >
      <div className='max-w-screen-sm bg-white bg-opacity-10 p-4 flex flex-col text-center'>
        <p>Hi this is my github status</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Followers</h3>
            <p className="text-4xl mt-2">{data.followers}
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Following</h3>
            <p className="text-4xl mt-2">{data.following}
            </p>
          </div>


        </div>
        <a href='https://github.com/SavithaSreeL' className='outline outline-white outline-1 rounded-lg p-3 mt-6'>Click here to visit</a>

      </div>
    </div>
  )
}
export default Github

export const InfoLoader = async () => {

  const response = await fetch('https://api.github.com/users/SavithaSreeL');

  return response.json();
}


