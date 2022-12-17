import React from 'react'
import Image from 'next/image'

export default function CategoryCard(props) {
  return (
    <div className="w-full categoryCard">
      <div className="border-gray-200 bg-[#F5F8FB] px-2 py-12 rounded-[24px]">
        <Image src={props.imagevar} alt="Image of doctor" width={50} height={50} />
        <p className="leading-relaxed">{props.cattitle}</p>
      </div>
    </div>
  )
}
