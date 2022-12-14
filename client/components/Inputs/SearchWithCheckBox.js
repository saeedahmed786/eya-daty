import { Checkbox, Input, Select } from 'antd';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import SearchIcon from "../../assets/search.svg"


const Option = Select;


const SearchWithCheckBox = ({ data, label, placeholder, handleUpdate }) => {
    const [selectedValue, setSelectedValue] = useState([]);
    const inputRef = useRef(null);
    const [name, setName] = useState('');

    const handleChange = (value) => {
        setSelectedValue(value)
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className='SelectBox relative bg-transparent'>
            <label>{label}</label>
            <br />
            <Select
                className='w-full'
                onChange={(value) => { handleUpdate(value) }}
                placeholder={placeholder}
                dropdownRender={(menu) => (
                    <div className='selectDropdown w-full p-4'>
                        <Input
                            suffix={<Image src={SearchIcon} alt="Search" />}
                            placeholder="Recherche...."
                            className='w-full'
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                        />
                        {menu}
                    </div>
                )}
            >
                {data?.filter(f => f?.toLowerCase().includes(name?.toLowerCase())).map((option) => (
                    <Option key={option} value={option}>
                        <Checkbox checked={selectedValue === option}>{option}</Checkbox>
                    </Option>
                ))}
            </Select>
        </div>
    );
}

export default SearchWithCheckBox
