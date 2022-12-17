import { Col, Form, Row, Select, Switch } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import DownArrow from '../../assets/DownArrow.svg';


const { Option } = Select;

const ProfileSelectBox = ({ label }) => {
    const [checked, setChecked] = useState(false);

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
                    <Row gutter={[16, 16]}>
                        <Col md={12}>
                            <Select className='w-full' placeholder="Ouverture">
                                <Option value="24/24">24/24</Option>
                                <Option value="00:00">00:00</Option>
                                <Option value="01:00">01:00</Option>
                                <Option value="02:00">02:00</Option>
                                <Option value="03:00">03:00</Option>
                            </Select>
                        </Col>
                        <Col md={12}>
                            <Select className='w-full' placeholder="Fermeture" suffixIcon={<Image src={DownArrow} alt="Arrow" />}>
                                <Option value="24/24">24/24</Option>
                                <Option value="00:00">00:00</Option>
                                <Option value="01:00">01:00</Option>
                                <Option value="02:00">02:00</Option>
                                <Option value="03:00">03:00</Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
            }
        </Row>
    )
}

export default ProfileSelectBox
