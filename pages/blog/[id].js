import { Col, Row } from 'antd'
import React from 'react'
import RightIcon from '../../icons/righticon'
import facebook from "../../assets/Facebook_icon.svg"
import twitter from "../../assets/Twitter_icon.svg"
import instagram from "../../assets/Instagram_icon.svg"
import link from "../../assets/Link_icon.svg"
import Image from 'next/image'
import Clinic from "../../assets/clinicimage1.png"
import SearchIcon from "../../assets/search.svg"
import SmallBlogCard from '../../components/Cards/SmallBlogCard'
import Doc from "../../assets/doc.jpg"
import CommentCard from '../../components/Cards/CommentCard'
import AddComment from '../../components/Cards/AddComment'
import DownloadApp from '../../components/Home/downloadApp'
import Subscribe from '../../components/Home/subscribe'
import Footer from '../../components/footer/footer'


const Blog = () => {
    return (
        <>
            <div className='Blog px-0 py-12 sm:px-24'>
                <Row gutter={[23, 23]}>
                    <Col md={16}>
                        <div className='flex gap-2 justify-start items-center py-4'>
                            <span>Accueil</span>
                            <RightIcon />
                            <button>Blog</button>
                            <RightIcon />
                            <button>Cardiologie</button>
                            <RightIcon />
                            <button className='text-[#0094DA]' href="/">Une hernie discale lombaire ventrale..</button>
                        </div>
                        <h1 className='bigTitle'>
                            Une hernie discale lombaire ventrale..
                        </h1>
                        <div className='py-12 socialCon flex gap-3 items-center'>
                            <div>Partagez cet article</div>
                            <div><Image src={facebook} alt="Facebook" width={32} /></div>
                            <div><Image src={twitter} alt="twitter" width={32} /></div>
                            <div><Image src={instagram} alt="instagram" width={32} /></div>
                            <div><Image src={link} alt="link" width={32} /></div>
                        </div>
                        <div className='blogDetails'>
                            <div className='mainImg'>
                                <Image src={Clinic} alt="Blog" />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='normalPara'>
                                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
                            </p>
                            <h3>Une inflammation cutanée</h3>
                            <p className='normalPara'>
                                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
                            </p>
                            <h3>Une pathologie très fréquente</h3>
                            <p className='normalPara'>
                                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
                            </p>
                            <h3>Les symptômes</h3>
                            <p className='normalPara'>
                                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
                            </p>
                            <h3>L’utilisation de substances irritantes</h3>
                            <p className='normalPara'>
                                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
                            </p>
                            <div className='bg-[#F5F8FB] rounded-[8px] p-6 my-8'>
                                <p className='italic'>
                                    Bien se laver les mains
                                    Si votre enfant présente un érythème fessier, pensez à bien vous laver les mains avant de le changer et d’appliquer les soins. La peau peut être à vif et donc plus sensible aux bactéries extérieures que vous pourriez avoir sur les mains.
                                </p>
                            </div>
                            <h3>
                                A propos de lauteur
                            </h3>
                            <div className='flex namAndPic gap-4'>
                                <div>
                                    <Image src={Doc} alt='name' className='rounded-[50%]' />
                                </div>
                                <div>
                                    <strong>Selma Achref</strong>
                                    <p className='normalPara my-2'>Docteur en pharmacie</p>
                                    <p className='normalPara mt-4'>Diplômé d’un doctorat en pharmacie de l’université de Reims, Paul Musset est passionné de médecine naturelle et de nutrition sportive. Il vous accompagne dans « Mon journal bien-être et beauté » en vous prodiguant ses conseils santé et bien-être.</p>
                                </div>
                            </div>
                            <div className='my-12'>
                                <h3>Commentaires</h3>
                                <CommentCard />
                                <div className='my-12'>
                                    <AddComment />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className='searchBox relative'>
                            <span>Chercher</span>
                            <br />
                            <input placeholder='Chercher...' />
                            <div className='absolute right-4 top-10'>
                                <Image src={SearchIcon} alt="Search" />
                            </div>
                        </div>
                        <h3>Nos articles les plus lus</h3>
                        <div className='my-8'>
                            <SmallBlogCard />
                            <SmallBlogCard />
                            <SmallBlogCard />
                        </div>
                        <div className='keywords px-4'>
                            <h3>
                                Mot clés
                            </h3>
                            <div className='flex flex-wrap items-center gap-2 mt-4'>
                                <button>Ophtalmologie</button>
                                <button>Chirurgie esthétique</button>
                                <button>Cardiologie</button>
                                <button>Chirurgie dentaire</button>
                            </div>
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

export default Blog
