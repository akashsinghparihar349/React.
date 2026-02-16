import React from 'react'

const Cards = ({Username ,imglink , AboutImg ,photography ,travel ,winter}) => {
    // console.log(props.Username)
  return (
    <div><div class="max-w-sm rounded overflow-hidden shadow-lg mr-5 ">
  <img className="w-full h-60" src={imglink} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{Username}</div>
    <p class="text-green-700 text-base">
      {AboutImg}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{photography}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{travel}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{winter}</span>
  </div>
</div></div>
  )
}

export default Cards