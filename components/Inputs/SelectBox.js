import React from 'react'

const SelectBox = ({ label, placeholder }) => {
    return (
        <div className='SelectBox relative'>
            <label>{label}</label>
            <br />
            <select placeholder={placeholder}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
        </div>
    )
}

export default SelectBox
