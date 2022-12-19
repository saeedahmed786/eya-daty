import { Col, Row, Table } from 'antd'
import Image from 'next/image'
import React from 'react'
import aboutimg from '/assets/aboutusimage.svg'
import Check from "../../assets/Checkmark.svg"
import Doc from "../../assets/doc.jpg"
import AdminLayout from '../../components/Layouts/Admin/AdminLayout'
import UserIcon from '../../icons/userIcon'
import DocumentIcon from '../../icons/documentIcon'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import AdminPagination from '../../components/Admin/Pagination'
import DeleteModal from '../../components/DeleteModal'

const Admin = () => {
    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id.length - b.id.length,
            render: (_, { id }) => (
                <>
                    <div className='text-[#0094DA] text-[12px] font-[500]'>{id}</div>
                </>
            ),
        },
        {
            title: 'Page',
            dataIndex: 'user',
            key: 'user',
            sorter: (a, b) => a.color.length - b.color.length,
            render: (_, { user }) => (
                <>
                    <div className='nameAndPic w-full flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='profileImg'>
                                <Image src={Doc} alt="Doctor" width={32} height={32} className="rounded-[50%]" />
                            </div>
                            <div className='w-full'>
                                <div className='flex gap-2'>
                                    <h6>{user.name}</h6>
                                    <Image src={Check} alt="Checkmark" />
                                </div>
                                <p className='mt-0 text-left text-[#65737E] text-[12px]'>{user.category}</p>
                            </div>
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: 'Catégorie',
            dataIndex: 'category',
            key: 'category',
            sorter: (a, b) => a.category.length - b.category.length
        },
        {
            title: 'Type de page',
            dataIndex: 'type',
            key: 'type',
            sorter: (a, b) => a.type.length - b.type.length
        },
        {
            title: 'Propriétaire de la page',
            dataIndex: 'owner',
            key: 'owner',
            sorter: (a, b) => a.owner.length - b.owner.length
        },
        {
            title: 'Actif',
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => a.status.length - b.status.length,
            render: (_, { status }) => (
                <>
                    <div className={`tag ${status} rounded-[12px] text-[12px] font-[500]`}>{status}</div>
                </>
            ),
        },
        {
            title: 'Actions',
            // dataIndex: 'actions',
            // key: 'actions',
            render: (_, { user }) => (
                <>
                    <div className='flex items-center gap-4'>
                        <EyeOutlined />
                        <EditOutlined />
                        <DeleteModal deleteBtn={<DeleteOutlined style={{ verticalAlign: "middle" }} />} />
                    </div>
                </>
            ),
        },
    ];
    const data = [
        {
            id: '#53972',
            key: '3',
            category: 'Ophtalmologie',
            type: 'Premium',
            owner: 'Oui',
            status: 'active',
            age: 32,
            user: {
                picture: "../../assets/doc.jpg",
                name: "Dr. Mechri Nasser",
                category: "Ophtalmologie"
            }
        },
        {
            id: '#53972',
            key: '3',
            category: 'Ophtalmologie',
            type: 'Premium',
            owner: 'Oui',
            status: 'pending',
            age: 32,
            user: {
                picture: "../../assets/doc.jpg",
                name: "Dr. Othmani Salem",
                category: "Cardiologie"
            }
        },
        {
            id: '#53972',
            key: '3',
            category: 'Ophtalmologie',
            type: 'Premium',
            owner: 'Oui',
            status: 'active',
            age: 32,
            user: {
                picture: "../../assets/doc.jpg",
                name: "Dr. Mechri Nasser",
                category: "Ophtalmologie"
            }
        },
    ];
    return (
        <AdminLayout sidebar>
            <div className='Admin pt-6'>
                <Row gutter={[0, 0]}>
                    <Col md={14} className="pr-6">
                        <div className="bg-white p-6 py-10 shadow-[0px 2px 4px rgba(0, 0, 0, 0.08)] rounded-[16px]">
                            <div className='flex items-center justify-between gap-6'>
                                <div>
                                    <Image src={aboutimg} alt="Doc" height={193} width={174} />
                                </div>
                                <div className='w-full'>
                                    <p className="text-sm  text-sitegreen mb-0 w-full">Témoignages</p>
                                    <h1 className="text-[32px] sm:text-[56px] mb-0 font-extrabold leading-[64px] text-gray-900">Achref maher.</h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={12} className="pr-6">
                                <div className="bg-white p-6 py-10 pt-6 shadow-[0px 2px 4px rgba(0, 0, 0, 0.08)] rounded-[16px]">
                                    <div className=''>
                                        <div className='bg-[#C9E681] w-[48px] h-[48px] rounded-[50%] flex justify-center items-center'>
                                            <UserIcon />
                                        </div>
                                        <div className='w-full'>
                                            <h1 className="text-[32px] sm:text-[56px] mb-0 font-extrabold leading-[64px] text-gray-900">92.4k</h1>
                                            <p className="text-sm text-[#65737E] mb-0 w-full">Utilisateurs</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} className="pr-6">
                                <div className="bg-white p-6 py-10 pt-6 shadow-[0px 2px 4px rgba(0, 0, 0, 0.08)] rounded-[16px]">
                                    <div className=''>
                                        <div className='bg-[#4DC5FF] w-[48px] h-[48px] rounded-[50%] flex justify-center items-center'>
                                            <DocumentIcon />
                                        </div>
                                        <div className='w-full'>
                                            <h1 className="text-[32px] sm:text-[56px] mb-0 font-extrabold leading-[64px] text-gray-900">36.9k</h1>
                                            <p className="text-sm text-[#65737E] mb-0 w-full">Les pages</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='mt-10 bg-white'>
                    <Table showSorterTooltip columns={columns} pagination={false} dataSource={data} />
                    <div className='adminPagination p-4 flex items-center justify-between my-12'>
                        <p className='text-[#65737E] text-[12px]'>Affichage de 1 à 7 sur 100 entrées</p>
                        <AdminPagination />
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Admin
