import { Col, Row } from 'antd'
import React from 'react'
import RightIcon from '../../icons/righticon'
import Check from "../../assets/Checkmark.svg"
import Image from 'next/image'
import cap from "../../assets/graduationcap.svg"
import services from "../../assets/cross.case.svg"
import building from "../../assets/building 1.svg"
import timeClock from "../../assets/Time Circle.svg"
import calendar from "../../assets/Calendar.svg"
import notes from "../../assets/Document.svg"
import Facebook from "../../assets/Facebook-blue.svg"
import Twitter from "../../assets/Twitter_blue.svg"
import Instagram from "../../assets/Instagram_blue.svg"
import Messenger from "../../assets/Messenger_blue.svg"
import Doc from "../../assets/doc.jpg"
import Map from "../../assets/Map-Sp.svg"
import Heart from "../../assets/Heart.svg"
import Boomark from "../../assets/Bookmark.svg"
import Link from "../../assets/link.svg"
import Send from "../../assets/Send.svg"
import Message from "../../assets/Message.svg"
import CommentCard from '../../components/Cards/CommentCard'
import AddComment from '../../components/Cards/AddComment'
import DownloadApp from '../../components/Home/downloadApp'
import Subscribe from '../../components/Home/subscribe'
import Footer from '../../components/footer/footer'
import { DislikeOutlined, DislikeTwoTone, EnvironmentTwoTone, EyeTwoTone, FacebookFilled, FacebookOutlined, HeartTwoTone, LikeOutlined, LikeTwoTone, MailTwoTone, MessageTwoTone, PhoneTwoTone, SendOutlined, StarTwoTone } from '@ant-design/icons'
import { FiFacebook } from 'react-icons/fi'
import Phone from '../../icons/Phone'


const IndDoctor = () => {
    return (
        <>
            <div className='DoctorDetails px-0 py-12 sm:px-24'>
                <div>
                    <div>
                        <div className='flex gap-2 justify-start items-center py-4'>
                            <span>Accueil</span>
                            <RightIcon />
                            <button>Cliniques</button>
                            <RightIcon />
                            <button>Cardiologie</button>
                            <RightIcon />
                            <button className='text-[#0094DA]'>Dr. Othmani Salem</button>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <div className='nameAndPic w-full flex items-center gap-2'>
                                    <div className='profileImg'>
                                        <Image src={Doc} alt="Doctor" width={32} height={32} className="rounded-[50%]" />
                                    </div>
                                    <div className='w-full'>
                                        <div className='flex gap-3'>
                                            <h2>Dr. Mechri Nasser</h2>
                                            <Image src={Check} width="40px" alt="Checkmark" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-6 mt-4 items-end'>
                                    <button className='flex gap-1 items-center'>
                                        <EyeTwoTone />
                                        <span>55k</span>
                                    </button>
                                    <button className='flex gap-1 items-center'>
                                        <HeartTwoTone />
                                        <span>240</span>
                                    </button>
                                    <button className='flex gap-1 items-center'>
                                        <StarTwoTone />
                                        <span>4.8</span>
                                    </button>
                                    <button className='flex gap-1 items-center text-[#0094DA]'>
                                        (42 Avis)
                                    </button>
                                    <button className='flex gap-1 items-center'>
                                        <MessageTwoTone />
                                        <span>12 Commantaires</span>
                                    </button>
                                </div>
                            </div>
                            <div className='iconsContainter'>
                                <div>
                                    <Image src={Heart} width="20px" alt="Heart" />
                                </div>
                                <div>
                                    <Image src={Boomark} width="20px" alt="Bookmart" />
                                </div>
                                <div>
                                    <Image src={Link} width="20px" alt="link" />
                                </div>
                            </div>
                        </div>
                        <Row gutter={[15, 15]} className='imagesContainer mt-12'>
                            <Col md={10} className='mainImg'>
                                <Image src={Doc} alt="Doctor" />
                            </Col>
                            <Col md={14} className='smallImages flex flex-wrap items-start gap-4'>
                                <Row wrap gutter={[15, 15]}>
                                    <Col>
                                        <Image src={Doc} alt="Doctor" />
                                    </Col>
                                    <Col>
                                        <Image src={Doc} alt="Doctor" />
                                    </Col>
                                    <Col>
                                        <Image src={Doc} alt="Doctor" />
                                    </Col>
                                    <Col>
                                        <Image src={Doc} alt="Doctor" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className='likeContantainer'>
                            <div>
                                <p className='normalPara'>{"D'après votre expérience, recommandez-vous de visiter la clinique ?"}</p>
                                <div className='flex justify-center mt-4 gap-6'>
                                    <button className='flex gap-1 items-center'>
                                        <DislikeOutlined />
                                        <span>Non</span>
                                    </button>
                                    <button className='flex gap-1 items-center'>
                                        <LikeOutlined />
                                        <span>Oui</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <section className='mt-8'>
                            <div className='header'>
                                <Image src={cap} alt="cap" />
                                <h4>Bio</h4>
                            </div>
                            <p className='normalPara px-4'>
                                {"eyadaty follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."}
                            </p>
                        </section>
                        <section className='mt-8'>
                            <div className='header'>
                                <Image src={building} alt="coo" />
                                <h4>Coordonnées</h4>
                            </div>
                            <Row className='px-4' gutter={[20, 20]}>
                                <Col md={12}>
                                    <div className='mt-8'>
                                        <button className='flex justify-between items-center w-full'>
                                            <div className='flex gap-2 items-center w-[80%] text-left'>
                                                <EnvironmentTwoTone style={{ fontSize: "21px" }} />
                                                <span>Quartier des 400 logements,  à côté du marché couvert, Beni Slimane, Médea</span>
                                            </div>
                                            <div>
                                                <Image src={Send} alt="Send" />
                                            </div>
                                        </button>
                                    </div>
                                    <div className='mt-8'>
                                        <button className='flex justify-between items-center w-full'>
                                            <div className='flex gap-2 items-center w-[100%] text-left'>
                                                <div className='text-[#0094DA]'>
                                                    <Phone />
                                                </div>
                                                <span>+213 657 85 82 89</span>
                                            </div>
                                            <div className='text-[#93C01F]'>
                                                <Phone />
                                            </div>
                                        </button>
                                    </div>
                                    <div className='mt-8'>
                                        <button className='flex gap-1 items-center'>
                                            <Image src={Message} alt="Message" className='text-[#fff]' />
                                            <span>otmani.cardio@yahoo.com</span>
                                        </button>
                                    </div>
                                    <div className='mt-8'>
                                        <p>Réseaux sociaux</p>
                                        <div className='flex gap-3 mt-4 items-center' >
                                            <Image src={Facebook} alt="Facebook" className='text-red' style={{ color: "red" }} />
                                            <Image src={Twitter} alt="Twitter" />
                                            <Image src={Instagram} alt="Instagram" />
                                            <Image src={Messenger} alt="Messenger" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <Image src={Map} alt="Map" className='text-red' style={{ color: "red" }} />
                                </Col>
                            </Row>
                        </section>
                        <section className='mt-8'>
                            <div className='header'>
                                <Image src={services} alt="services" />
                                <h4>Services</h4>
                            </div>
                            <ul className='px-4'>
                                <li>
                                    Echo dopler cardiaque adulte.
                                </li>
                                <li>
                                    {"Examen échographique du cœur chez l'adulte."}
                                </li>
                                <li>
                                    Potentiomètre.
                                </li>
                                <li>
                                    ECG.
                                </li>
                                <li>
                                    Hotler Tensionnel ( MAPA ).
                                </li>
                                <li>
                                    Pression artérielle.
                                </li>
                            </ul>
                        </section>
                        <section className='mt-8'>
                            <div className='header flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <Image src={timeClock} alt="timeClock" />
                                    <h4>Horaire de travail</h4>
                                </div>
                                <div className='text-[#29C773] font-[600]'>Ouvert</div>
                            </div>
                            <div className='px-4 calendar flex justify-between flex-wrap'>
                                <div>
                                    <Image src={calendar} alt="calendar" />
                                    <h5>Samedi</h5>
                                    <div className='flex flex-wrap items-center'>
                                        <p>08:00  -  12:00</p>
                                        <p>13:00  -  17:00</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={calendar} alt="calendar" />
                                    <h5>Samedi</h5>
                                    <div className='flex flex-wrap items-center'>
                                        <p>08:00  -  12:00</p>
                                        <p>13:00  -  17:00</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={calendar} alt="calendar" />
                                    <h5>Samedi</h5>
                                    <div className='flex flex-wrap items-center'>
                                        <p>08:00  -  12:00</p>
                                        <p>13:00  -  17:00</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={calendar} alt="calendar" />
                                    <h5>Samedi</h5>
                                    <div className='flex flex-wrap items-center'>
                                        <p>08:00  -  12:00</p>
                                        <p>13:00  -  17:00</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={calendar} alt="calendar" />
                                    <h5>Samedi</h5>
                                    <div className='flex flex-wrap items-center'>
                                        <p>08:00  -  12:00</p>
                                        <p>13:00  -  17:00</p>
                                    </div>
                                </div>
                                <div>
                                    <Image src={calendar} alt="calendar" />
                                    <h5>Samedi</h5>
                                    <div className='flex flex-wrap items-center'>
                                        <p>08:00  -  12:00</p>
                                        <p>13:00  -  17:00</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='mt-8'>
                            <div className='header'>
                                <Image src={notes} alt="notes" />
                                <h4>Notes</h4>
                            </div>
                            <ul className='px-4'>
                                <li>
                                    eyadaty follows a standard procedure of using log files.
                                </li>
                                <li>
                                    {"Examen échographique du cœur chez l'adulte."}
                                </li>
                                <li>
                                    eyadaty follows a standard procedure of using log files.
                                </li>
                                <li>
                                    eyadaty follows a standard procedure of using log files.
                                </li>
                                <li>
                                    eyadaty follows a standard procedure of using log files.
                                </li>
                                <li>
                                    eyadaty follows a standard procedure of using log files.
                                </li>
                            </ul>
                        </section>
                        <section className='mt-8'>
                            <div className='header flex items-center'>
                                <MessageTwoTone />
                                <h4>Commantaires</h4>
                                <div className='count'>100</div>
                            </div>
                            <div className='px-4'>
                                <CommentCard />
                                <div className='my-12'>
                                    <AddComment />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default IndDoctor
