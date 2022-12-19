import { Checkbox, Table } from 'antd'
import Image from 'next/image'
import React from 'react'
import Check from "../../assets/Checkmark.svg"
import Doc from "../../assets/doc.jpg"
import AdminLayout from '../../components/Layouts/Admin/AdminLayout'
import { DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined } from '@ant-design/icons'
import AdminPagination from '../../components/Admin/Pagination'
import RightIcon from '../../icons/righticon'
import PlusIcon from '../../icons/plusIcon'
import SearchInputs from '../../components/Inputs/SearchInputs'
import { useRouter } from 'next/router'
import SelectBoxWidthSearch from '../../components/Inputs/SelectBox'
import DeleteModal from '../../components/DeleteModal'

const Pages = () => {
    const router = useRouter();

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
            sorter: (a, b) => a.id.length - b.id.length,
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
                        <EditOutlined onClick={() => router.push("/admin/update-page")} />
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
            <div className='Pages pt-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center py-4'>
                        <span>Accueil</span> <RightIcon /> <button className='text-[#0094DA]'>Les pages</button>
                    </div>
                    <div>
                        <button onClick={() => router.push("/admin/create-page")} className='flex items-center gap-2 bg-[#0094DA] rounded-[12px] text-white h-[48px] px-6'>
                            <PlusIcon />
                            <span className='text-[16px] font-[500]'>Ajouter un page</span>
                        </button>
                    </div>
                </div>
                <h1 className='bigTitle'>Les pages</h1>
                <div className='max-w-[40vw]'>
                    <div className='flex gap-3 mt-12'>
                        <SearchInputs />
                        <button className='flex w-full items-center justify-center gap-2 bg-[#fff] border border-[#0094DA] rounded-[12px] text-[#0094DA] h-[48px] px-6'>
                            <FilterOutlined />
                            <span className='text-[16px] font-[500]'>Filter</span>
                        </button>
                    </div>
                    <div className='mt-12'>
                        <SelectBoxWidthSearch placeholder="Catégorie" />
                    </div>
                    <div className='flex justify-between mt-6'>
                        <div>
                            <h5>Type de page</h5>
                            <div className='flex justify-between mt-3'>
                                <Checkbox>Freemium</Checkbox>
                                <Checkbox>Premium</Checkbox>
                            </div>
                        </div>
                        <div>
                            <h5>Actif</h5>
                            <div className='flex justify-between mt-3'>
                                <Checkbox>Activé</Checkbox>
                                <Checkbox>En attente</Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='bg-[#0094DA] mt-6 rounded-[12px] text-white h-[48px] px-12 text-[16px] font-[500]'>
                    Filtrez
                </button>
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

export default Pages
