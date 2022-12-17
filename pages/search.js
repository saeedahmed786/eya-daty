import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Col, Pagination, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import Map from "../assets/Map.svg"
import SearchCard from '../components/Cards/SearchCard'
import Footer from '../components/footer/footer'
import SearchInputs from '../components/Inputs/SearchInputs'
import SelectBox from '../components/Inputs/SelectBox'
import RightIcon from '../icons/righticon'

const Search = () => {
    const [gridCol, setGridCol] = useState(24);
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
            <div className='SearchPage px-0 sm:px-24 py-8'>
                <div className='flex gap-2 justify-start items-center py-4'>
                    <span>Accueil</span>
                    <RightIcon />
                    <span>Cliniques</span>
                    <RightIcon />
                    <button className='text-[#0094DA]' href="/faq">Cardiologie</button>
                </div>
                <SearchInputs />
                <div className='flex flex-wrap justify-between items-center gap-8 mt-8'>
                    <div className='flex flex-wrap gap-8'>
                        <div className='w-[15vw]'>
                            <SelectBox label="Commune" placeholder="Commune" />
                        </div>
                        <div className='w-[15vw]'>
                            <SelectBox label="Services" placeholder="Services" />
                        </div>
                        <div className='w-[15vw]'>
                            <SelectBox label="Trier par" placeholder="Trier par" />
                        </div>
                        <div className='w-[15vw]'>
                            <SelectBox label="Le genre" placeholder="Le genre" />
                        </div>
                        <div className='w-[15vw]'>
                            <SelectBox label="Options" placeholder="Options" />
                        </div>
                    </div>
                </div>
                <Row gutter={[23, 23]}>
                    <Col md={14}>
                        <h2 className='subTitle my-12'>Recherche de <span className='text-[#0094DA]'>{`" Cardiologie "`}</span></h2>
                        <div className='flex justify-between items-center my-8'>
                            <div>Nous avons trouvé <span className='text-[#0094DA]'>1 - 55</span> résultats</div>
                            <div className='flex gap-2 items-center filterBtn'>
                                <span>Affichage</span>
                                <div>
                                    <button className={`btn ${gridCol === 12 && "focused"}`} onClick={() => setGridCol(12)}>
                                        <AppstoreOutlined />
                                    </button>
                                </div>
                                <div>
                                    <button className={`btn ${gridCol === 24 && "focused"}`} onClick={() => setGridCol(24)}>
                                        <UnorderedListOutlined />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Row gutter={[12, 12]}>
                            <Col md={gridCol}>
                                <div>
                                    <SearchCard gridCol={gridCol} />
                                </div>
                            </Col>
                            <Col md={gridCol}>
                                <div>
                                    <SearchCard gridCol={gridCol} />
                                </div>
                            </Col>
                            <Col md={gridCol}>
                                <div>
                                    <SearchCard gridCol={gridCol} />
                                </div>
                            </Col>
                            <Col md={gridCol}>
                                <div>
                                    <SearchCard gridCol={gridCol} />
                                </div>
                            </Col>
                            <Col md={gridCol}>
                                <div>
                                    <SearchCard gridCol={gridCol} />
                                </div>
                            </Col>
                        </Row>
                        <div className='paginationCon my-12'>
                            <Pagination total={500} itemRender={itemRender} showSizeChanger={false} />
                        </div>
                    </Col>
                    <Col md={10} className="pl-0 pt-8 relative">
                        <div style={{ height: "100%", marginLeft: "100px", marginRight: "-21vw" }}>
                            <Image src={Map} alt="Map" objectFit='cover' />
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    )
}

export default Search
