import React from 'react'
import icon from '/assets/Icon.png'
import icon1 from '/assets/Icon-1.png'
import icon2 from '/assets/Icon-2.png'
import icon3 from '/assets/Icon-3.png'
import icon4 from '/assets/Icon-4.png'
import icon5 from '/assets/Icon-5.png'
import LeftIcon from '../../icons/lefticon'
import RightIcon from '../../icons/righticon'
import CategoryCard from './categoryCard'
import { useRouter } from 'next/router'


export default function Categories() {
  const router = useRouter();

  return (
    <section className="text-gray-600 body-font bg-[url('../assets/Lines-alt.png')] bg-cover bg-no-repeat  ">
      <div className="container py-16 mx-auto ">
        <div className="flex flex-wrap justify-between px-12 w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className='text-sitegreen font-medium'>Explorez tous les</p>
            <h1 className="sm:text-3xl text-2xl lg:text-6xl lg:font-extrabold font-medium title-font mb-2 text-gray-900">Catégories</h1>
          </div>
          <div className='flex flex-row justify-center space-x-2   '>
            <button>
              <div> <LeftIcon /> </div>
            </button>
            <button>
              <div> <RightIcon /> </div>
            </button>
          </div>
        </div>
        <div className="flex gap-4 text-center overflow-x-auto mb-12">
          <CategoryCard imagevar={icon} cattitle="Generaliste" />
          <CategoryCard imagevar={icon1} cattitle="Chirugie Dentaire" />
          <CategoryCard imagevar={icon2} cattitle="ORL" />
          <CategoryCard imagevar={icon3} cattitle="Ophtalmologie" />
          <CategoryCard imagevar={icon4} cattitle="Cardiolgie" />
          <CategoryCard imagevar={icon5} cattitle="Chirugie Esthetique" />
        </div>
        <div className='w-full flex justify-center'>
          <div className="flex w-full md:justify-center justify-center items-end ">
            <button onClick={() => router.push("/categories")} className="text-white text-left bg-siteblue border-0 py-2 px-16 focus:outline-none hover:bg-sitegreen rounded-xl text-lg flex items-center gap-3"><span>Voir tous les categorie </span> <RightIcon /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
