import { Col, Pagination, Row } from 'antd'
import React from 'react'
import SearchCard from '../components/Cards/SearchCard'
import Footer from '../components/footer/footer'
import DownloadApp from '../components/Home/downloadApp'
import Subscribe from '../components/Home/subscribe'
import SearchInputs from '../components/Inputs/SearchInputs'
import RightIcon from '../icons/righticon'

const Favourites = () => {

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <button className='prevBtn'>Précédent</button>;
        }
        if (type === 'next') {
            return <button className='nextBtn'>Suivant</button>;
        }
        return originalElement;
    };
    return (
        <>
            <div className='Favourites px-0 sm:px-24 py-8'>
                <div className='flex gap-2 justify-center items-center py-4'>
                    <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]'>Favoris </button>
                </div>
                <h1 className='bigTitle text-center py-3'>Favoris</h1>
                <Row>
                    <Col md={6}>
                        <div>
                            <label>Chercher</label>
                            <SearchInputs />
                        </div>
                        <h1 className='bigTitle text-center py-4'>Catégories</h1>
                        <div className='mt-8'>
                            <button className='catCard my-4'>
                                <div className='name'>Généraliste</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                            <button className='catCard my-4'>
                                <div className='name'>Chirurgie dentaire</div>
                                <div className='count'>100</div>
                            </button>
                        </div>
                    </Col>
                    <Col md={18} className="pl-12 pt-8">
                        <Row gutter={[23, 32]}>
                            <Col md={24}>
                                <SearchCard favourite={true} />
                            </Col>
                            <Col md={24}>
                                <SearchCard favourite={true} />
                            </Col>
                            <Col md={24}>
                                <SearchCard favourite={true} />
                            </Col>
                            <Col md={24}>
                                <SearchCard favourite={true} />
                            </Col>
                        </Row>
                        <div className='paginationCon my-12'>
                            <Pagination total={500} itemRender={itemRender} showSizeChanger={false} />
                        </div>
                    </Col>
                </Row>
            </div>
            <DownloadApp noMargin={true} />
            <Subscribe noMargin={true} />
            <Footer />
        </>
    )
}

export default Favourites
