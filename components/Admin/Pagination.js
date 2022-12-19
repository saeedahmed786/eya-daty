import Pagination from 'rc-pagination'
import React from 'react'
import RightIcon from '../../icons/righticon';

const AdminPagination = () => {
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <button className='prevBtn' style={{ transform: "rotate(180deg)" }}><RightIcon /></button>;
        }
        if (type === 'next') {
            return <button className='nextBtn'><RightIcon /></button>;
        }
        return originalElement;
    };

    return (
        <div className='AdminPagination'>
            <Pagination total={500} itemRender={itemRender} showSizeChanger={false} />
        </div>
    )
}

export default AdminPagination
