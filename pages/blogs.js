import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Col, Pagination, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import SearchIcon from "../assets/search.svg"
import BlogCard from '../components/Cards/BlogCard'
import Footer from '../components/footer/footer'
import DownloadApp from '../components/Home/downloadApp'
import Subscribe from '../components/Home/subscribe'
import RightIcon from '../icons/righticon'

const Blogs = () => {
    const router = useRouter();

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
            <div className='blogsPage px-0 sm:px-24 py-8'>
                <div className='flex gap-2 justify-center items-center py-4'>
                    <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]' href="/faq">Blog</button>
                </div>
                <h1 className='bigTitle text-center py-3'>Voir notre  < br />dernier blog</h1>
                <div className='flex flex-wrap justify-between items-center gap-8 mt-8'>
                    <div className='flex gap-8'>
                        <div className='searchBox relative'>
                            <label>Chercher</label>
                            <br />
                            <input placeholder='Chercher...' />
                            <div className='absolute right-4 top-10'>
                                <Image src={SearchIcon} alt="Search" />
                            </div>
                        </div>
                        <div className='searchBox relative'>
                            <label>Trier par</label>
                            <br />
                            <select placeholder='Plus recent'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center filterBtn'>
                        <span>Affichage</span>
                        <div>
                            <button className='btn'>
                                <AppstoreOutlined />
                            </button>
                        </div>
                        <div>
                            <button className='btn'>
                                <UnorderedListOutlined />
                            </button>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col md={6}>
                        <h1 className='bigTitle text-center py-3'>Catégories</h1>
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
                            <Col md={12}>
                                <button onClick={() => router.push("/blog/1")}>
                                    <BlogCard />
                                </button>
                            </Col>
                            <Col md={12}>
                                <button onClick={() => router.push("/blog/1")}>
                                    <BlogCard />
                                </button>
                            </Col>
                            <Col md={12}>
                                <button onClick={() => router.push("/blog/1")}>
                                    <BlogCard />
                                </button>
                            </Col>
                            <Col md={12}>
                                <button onClick={() => router.push("/blog/1")}>
                                    <BlogCard />
                                </button>
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

export default Blogs
