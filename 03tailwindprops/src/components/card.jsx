import React from 'react'

function Card({userName}) {
    console.log(userName);
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/33189516/pexels-photo-33189516.jpeg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {userName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card



// Summary: This code defines a React functional component named Card that takes a userName prop and displays a styled card with an image, the userName, a title, and a description using Tailwind CSS classes for styling.And it is imported and used in App.jsx with different userName values. It also logs the userName prop to the console. 