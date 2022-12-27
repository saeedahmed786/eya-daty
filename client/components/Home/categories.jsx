import React, { useRef } from 'react'
import icon from '/assets/Icon.png'
import LeftIcon from '../../icons/lefticon'
import RightIcon from '../../icons/righticon'
import CategoryCard from './categoryCard'
import { useRouter } from 'next/router'
import Slider from 'react-slick'


export default function Categories({ categories }) {
  const router = useRouter();
  const slickRef = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerPadding: '60px',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="text-gray-600 body-font categoriesComp bg-[url('../assets/Lines-alt.png')] bg-cover bg-no-repeat  ">
      <div className="container py-16 mx-auto ">
        <div className="flex flex-wrap justify-between px-0 w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className='text-sitegreen font-medium pl-1'>Explorez tous les</p>
            <h1 className="sm:text-3xl text-2xl lg:text-6xl lg:font-extrabold font-medium title-font mb-2 text-gray-900">Catégories</h1>
          </div>
          <div className='flex flex-row justify-center space-x-1'>
            <button onClick={() => slickRef.current?.slickPrev()}>
              <div> <LeftIcon /> </div>
            </button>
            <button onClick={() => slickRef.current?.slickNext()} >
              <div style={{ transform: "rotate(180deg)" }}> <LeftIcon /> </div>
            </button>
          </div>
        </div>
        <div>
          {/* <div className="flex gap-4 text-center overflow-x-auto mb-12"> */}
          <Slider {...settings} ref={slickRef}>
            {
              categories && categories?.map(cat => {
                return (
                  <div>
                    <CategoryCard cat={cat} />
                  </div>
                )
              })
            }
          </Slider>
          {/* <CategoryCard imagevar={icon1} cattitle="Chirugie Dentaire" />
          <CategoryCard imagevar={icon2} cattitle="ORL" />
          <CategoryCard imagevar={icon3} cattitle="Ophtalmologie" />
          <CategoryCard imagevar={icon4} cattitle="Cardiolgie" />
          <CategoryCard imagevar={icon5} cattitle="Chirugie Esthetique" /> */}
        </div>
        <div className='w-full flex justify-center mt-8'>
          <div className="flex w-full md:justify-center justify-center items-end ">
            <button onClick={() => router.push("/categories")} className="text-white text-left bg-siteblue border-0 py-2 px-16 focus:outline-none hover:bg-sitegreen rounded-xl text-lg flex items-center gap-3"><span>Voir tous les categorie </span> <RightIcon /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
