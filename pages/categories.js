import icon from '/assets/Icon.png'
import React from 'react'
import CategoryCard from '../components/Home/categoryCard';
import RightIcon from '../icons/righticon';
import DownloadApp from '../components/Home/downloadApp'
import MainLayout from '../components/Layouts/MainLayout'

const Categories = () => {

    return (
        <MainLayout navbar>
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
            <DownloadApp noMargin />
        </MainLayout>
    )
}

export default Categories
