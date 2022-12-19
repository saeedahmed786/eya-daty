import { Col, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import AdminNavbar from './AdminNavbar'
// import RightIcon from '../../icons/righticon'
// import Footer from '../footer/footer'
// import DownloadApp from '../Home/downloadApp'
import AdminSidebar from './AdminSidebar'

const AdminLayout = (props) => {
    const router = useRouter();

    return (
        <>
            <div className='AdminLayout bg-[#F5F8FB] px-4 pb-24'>
                {
                    props.sidebar ?
                        <Row className='mt-0'>
                            <Col md={4} className="bg-white">
                                <AdminSidebar />
                            </Col>
                            <Col md={20} className="bg-[#F5F8FB]">
                                <div className='p-5'>
                                    <AdminNavbar />
                                    <div>
                                        {props.children}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        :
                        props.children
                }
            </div>
        </>
    )
}

export default AdminLayout
