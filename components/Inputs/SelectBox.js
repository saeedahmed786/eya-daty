import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Input, Select, Space } from 'antd'
import Image from 'next/image';
import React, { useRef, useState } from 'react'
const { Option } = Select;
import SearchIcon from "../../assets/search.svg"
import DownArrow from "../../assets/DownArrow.svg"

const SelectBoxWidthSearch = ({ label, placeholder }) => {
    const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <div className='SelectBox relative'>
                <label>{label}</label>
                <br />
                <Select
                    className='w-full'
                    placeholder={placeholder}
                    options={items.filter(f => f?.toLowerCase().includes(name?.toLowerCase())).map((item) => ({
                        label: item,
                        value: item,
                    }))}
                    suffixIcon={<Image src={DownArrow} alt="Down Arrow" />}
                    dropdownRender={(menu) => (
                        <div className='selectDropdown'>
                            <Space
                                style={{
                                    padding: '0px 0px',
                                }}
                                className="SelectBoxSelect"
                            >
                                <Input
                                    suffix={<Image src={SearchIcon} alt="Search" />}
                                    placeholder="Recherche...."
                                    ref={inputRef}
                                    value={name}
                                    onChange={onNameChange}
                                />
                            </Space>
                            {menu}
                        </div>
                    )}
                />
            </div>
        </>
    )
}

export default SelectBoxWidthSearch
