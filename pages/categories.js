import icon from '/assets/Icon.png'
import icon1 from '/assets/Icon-1.png'
import icon2 from '/assets/Icon-2.png'
import icon3 from '/assets/Icon-3.png'
import icon4 from '/assets/Icon-4.png'
import icon5 from '/assets/Icon-5.png'
import React, { useState } from 'react'
import CategoryCard from '../components/Home/categoryCard';
import RightIcon from '../icons/righticon';

const Categories = () => {

    return (
        <div className='Categories container px-5 mx-auto pb-24 pt-6'>
            <div className='text-center'>
                <div className='flex gap-2 justify-center items-center py-4'>
                    <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]'>Catégories</button>
                </div>
                <h1 className='bigTitle'>Catégories</h1>
            </div>
            <div className='flex flex-wrap gap-6 mt-12'>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
                <div>
                    <CategoryCard imagevar={icon} cattitle="Generaliste" />
                </div>
            </div>
        </div>
    )
}

export default Categories
