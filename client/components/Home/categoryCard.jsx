import React from 'react'

export default function CategoryCard({ cat }) {
  return (
    <div className="w-full categoryCard text-center">
      <div className="border-gray-200 bg-[#F5F8FB] px-2 py-12 rounded-[24px]">
        <img src={cat?.file?.url} alt="Image of doctor" className='inline-block mb-3' width={50} height={50} />
        <p className="leading-relaxed">{cat?.name}</p>
      </div>
    </div>
  )
}
