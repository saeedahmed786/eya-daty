import { Col, Form, Row, Select, Switch } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import DownArrow from '../../assets/DownArrow.svg';


const { Option } = Select;

const ProfileSelectBox = ({ label, saveItem }) => {
    const [checked, setChecked] = useState(false);
    const [opening, setOpening] = useState("");
    const [closing, setClosing] = useState("");

    return (
        <Row gutter={[23, 23]} className="mb-6">
            <Col xs={12}>
                <label>{label}</label>
            </Col>
            <Col xs={12} className="text-end">
                <Switch onChange={(value) => setChecked(value)} /> Fermé
            </Col>
            {
                checked &&
                <Col xs={24}>
                    <Row gutter={[16, 16]} align="middle">
                        <Col md={11}>
                            <Select className='w-full' placeholder="Ouverture" onChange={(value) => setOpening(value)}>
                                <Option value="24/24">24/24</Option>
                                <Option value="00:00">00:00</Option>
                                <Option value="01:00">01:00</Option>
                                <Option value="02:00">02:00</Option>
                                <Option value="03:00">03:00</Option>
                                <Option value="04:00">04:00</Option>
                                <Option value="05:00">05:00</Option>
                                <Option value="06:00">06:00</Option>
                                <Option value="07:00">07:00</Option>
                                <Option value="08:00">08:00</Option>
                                <Option value="09:00">09:00</Option>
                                <Option value="10:00">10:00</Option>
                                <Option value="11:00">11:00</Option>
                                <Option value="12:00">12:00</Option>
                            </Select>
                        </Col>
                        <Col md={11}>
                            <Select className='w-full' placeholder="Fermeture" onChange={(value) => setClosing(value)} suffixIcon={<Image src={DownArrow} alt="Arrow" />}>
                                <Option value="24/24">24/24</Option>
                                <Option value="00:00">00:00</Option>
                                <Option value="01:00">01:00</Option>
                                <Option value="02:00">02:00</Option>
                                <Option value="03:00">03:00</Option>
                                <Option value="04:00">04:00</Option>
                                <Option value="05:00">05:00</Option>
                                <Option value="06:00">06:00</Option>
                                <Option value="07:00">07:00</Option>
                                <Option value="08:00">08:00</Option>
                                <Option value="09:00">09:00</Option>
                                <Option value="10:00">10:00</Option>
                                <Option value="11:00">11:00</Option>
                                <Option value="12:00">12:00</Option>
                            </Select>
                        </Col>
                        <Col md={2}>
                            <button className='btn bg-black text-white p-2 px-2 rounded-md h-[100%]' type='button' onClick={() => { saveItem(opening, closing, label); setChecked(false) }}>Save</button>
                        </Col>
                    </Row>
                </Col>
            }
        </Row>
    )
}

export default ProfileSelectBox
