import React, { useState } from 'react'
import ProfileIcon from '../../assets/gallery.svg';
import galleryIcon from '../../assets/galleryIcon.svg';
import ProfileLayout from '../../components/Layouts/ProfileLayout'
import UploadIcon from '../../assets/upload.svg'
import Image from 'next/image';
import { ArrowUpOutlined, EnvironmentOutlined, InfoCircleFilled } from '@ant-design/icons';
import { Checkbox, Col, Form, Input, Radio, Row, Select, Upload } from 'antd';
import ProfileSelectBox from '../../components/Profile/ProfileSelectBox';
import NotesModal from '../../components/Admin/NotesModal';

const { Option } = Select;

const CreatePage = () => {
    const [file, setFile] = useState();
    const [gender, setGender] = useState("Male");
    const [selectedNotes, setSelectedNotes] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    console.log(selectedNotes);

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    const notes = [
        "Les rendez-vous peuvent être pris par téléphone",
        "Ne soyez pas en retard à un rendez-vous",
        "Les rendez-vous sont pris le soir",
        "Consultation sur R.D.V",
        "Congé annuel 02 août - 22 août",
        "Examen sur rendez-vous",
        "Horaires spéciaux Covid-19",
        "Consultation sur Rendez-vous",
        "Pour prendre rendez-vous, veuillez appeler",
        "Veuillez apporter la carte d'examen",
        "Examen uniquement sur rendez-vous",
        "Consultation par tour de role"
    ];

    const services = [
        "Les rendez-vous peuvent être pris par téléphone",
        "Ne soyez pas en retard à un rendez-vous",
        "Les rendez-vous sont pris le soir",
        "Consultation sur R.D.V",
        "Congé annuel 02 août - 22 août",
        "Examen sur rendez-vous",
        "Horaires spéciaux Covid-19",
        "Consultation sur Rendez-vous",
        "Pour prendre rendez-vous, veuillez appeler",
        "Veuillez apporter la carte d'examen",
        "Examen uniquement sur rendez-vous",
        "Consultation par tour de role"
    ];

    return (
        <ProfileLayout sidebar>
            <div className='CreatePage'>
                <div className='mt-0'>
                    <div className='pictureUploadContainer'>Image de profile</div>
                    <div className='flex gap-4 items-center mt-4'>
                        <Image src={ProfileIcon} width={80} alt="Profile" />
                        <div className='relative'>
                            <span className="btn btn-primary btn-file">
                                <button className='uploadBtn flex items-center gap-2'>
                                    <span>Ajouter un image</span>
                                    <span className='arrowUp'><ArrowUpOutlined /></span>
                                    <input type="file" />
                                </button>
                            </span>
                        </div>
                        <div>
                            <button className='deleteBtn'>
                                Supprimer
                            </button>
                        </div>
                    </div>
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                        className='mt-10'
                    >
                        <Form.Item
                            name="Type de page"
                            label="Type de page"
                            requiredMark={"*"}
                            required
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Type de page!',
                                },
                            ]}
                        >
                            <Select placeholder="Type de page">
                                <Option value="Clinique médical">Clinique médical</Option>
                                <Option value="Doctor">Doctor</Option>
                            </Select>
                        </Form.Item>
                        <Row gutter={[16, 16]}>
                            <Col md={12}>
                                <Form.Item
                                    name="name"
                                    label="Nom"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Nom!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Nom' />
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    name="name"
                                    label="Prénom"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Prénom!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Prénom' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item name="radio-group" label="Gender">
                            <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Numéro de Téléphone"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Numéro de Téléphone!',
                                }
                            ]}
                        >
                            <Input placeholder='Numéro de Téléphone' prefix={"+213"} />
                        </Form.Item>
                        <Form.Item
                            name="phoneTwo"
                            label="Numéro de Téléphone 02 ( Optionnel )"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Numéro de Téléphone 02 ( Optionnel )!',
                                }
                            ]}
                        >
                            <Input placeholder='Numéro de Téléphone 02 ( Optionnel )' prefix={"+213"} />
                        </Form.Item>
                        <Form.Item
                            name="phoneTwo"
                            label="Numéro de Téléphone Fixe ( Optionnel )"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Numéro de Téléphone Fixe ( Optionnel )!',
                                }
                            ]}
                        >
                            <Input placeholder='Numéro de Téléphone Fixe ( Optionnel )' prefix={"+213"} />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            required
                            hasFeedback
                            rules={[
                                {
                                    type: 'email',
                                    message: "Format d'e-mail incorrect",
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input placeholder='E-mail' />
                        </Form.Item>
                        <Form.Item
                            name="facebookLink"
                            label="Lien de Facebook  ( Optionnel )"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Lien de Facebook  ( Optionnel )!',
                                },
                            ]}
                        >
                            <Input placeholder='Lien de Facebook  ( Optionnel )' />
                        </Form.Item>
                        <Form.Item
                            name="Bio ( Optionnel )"
                            label="Bio ( Optionnel )"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Bio ( Optionnel )',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder='Bio' rows={6} showCount maxLength={100} />
                        </Form.Item>
                        <Form.Item
                            name="Spécialité"
                            label="Spécialité"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Spécialité!',
                                },
                            ]}
                        >
                            <Select placeholder="Spécialité">
                                <Option value="Medicine">Medicine</Option>
                                <Option value="Surgery">Surgery</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="experience"
                            label="Experience"
                            required
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Experience!',
                                },
                            ]}
                        >
                            <Input placeholder='Experience' />
                        </Form.Item>
                        <div className='my-4' style={{ maxWidth: "60%" }}>
                            <label className='flex gap-2 mb-4 items-center'>
                                <span>Horaire de travail</span>
                                <span className='text-[#FF6551]'>*</span>
                                <InfoCircleFilled className="text-[#0094DA]" />
                            </label>
                            <ProfileSelectBox label="Samedi" />
                            <ProfileSelectBox label="Dimanche" />
                            <ProfileSelectBox label="Lundi" />
                            <ProfileSelectBox label="Mardi" />
                            <ProfileSelectBox label="Mercredi" />
                            <ProfileSelectBox label="Jeudi" />
                        </div>
                        <Form.Item
                            name="notes"
                            label="Les notes ( Optionnel )"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Les notes ( Optionnel )!',
                                }
                            ]}
                        >
                            <NotesModal notes={services} title="Ajouter une note" handleUpdate={(value) => setSelectedNotes(value)} />
                            <button className='text-[#0094DA] font-[500]'>Ajouter une note</button>
                        </Form.Item>
                        <Form.Item
                            name="clinicName"
                            label="Nom de la clinique ( Optionnel )"
                            hasFeedback
                        >
                            <Input placeholder='Nom de la clinique' />
                        </Form.Item>
                        <div className='mt-4'>
                            <label className='flex gap-2 mb-4 items-center'>
                                <span className='font-[700] leading-[16px]'>Horaire de travail</span>
                                <span className='text-[#FF6551]'>*</span>
                                <InfoCircleFilled className="text-[#0094DA]" />
                            </label>
                            <label>Code GPS</label>
                            <Row align={"center"} gutter={[16, 16]}>
                                <Col xs={19}>
                                    <Form.Item
                                        name="gpsData"
                                        required
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Code GPS!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder='Ex : 36.267845, 2.711350' />
                                    </Form.Item>
                                </Col>
                                <Col xs={5}>
                                    <button className='bg-[#0094DA] rounded-[12px] w-[48px] h-[48px] flex justify-center items-center'>
                                        <EnvironmentOutlined className='text-white' style={{ fontSize: "19px" }} />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Form.Item
                            name="services"
                            label="Services"
                            className='mt-2'
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Services!',
                                }
                            ]}
                        >
                            <NotesModal title="Ajouter une services" notes={services} handleUpdate={(value) => setSelectedServices(value)} />
                            {/* <button className='text-[#0094DA] font-[500]'>Ajouter une note</button> */}
                        </Form.Item>
                        <Form.Item label="Dragger">
                            <label>
                                <span className='font-[700] leading-[16px]'>Horaire de travail</span>
                                <span className='text-[#FF6551] px-1'>*</span>
                            </label>
                            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                <Upload.Dragger name="files" action="/upload.do" height={148}>
                                    <p className="mb-0">
                                        <Image src={UploadIcon} alt="Upload Icon" />
                                    </p>
                                </Upload.Dragger>
                            </Form.Item>
                            <p className='text-center text-[#65737E] leading-[12px] mt-2'>{"Essayez de télécharger l'image dans ces formats ( PNG, JPEG )"}</p>
                        </Form.Item>
                        <div className='my-4'>
                            <div className='flex flex-wrap gap-6 mt-8'>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                                <div className='imageBox w-[166px] h-[148px] rounded-[12px] border flex justify-center items-center'>
                                    <Image src={galleryIcon} alt="Gallery Icon" />
                                </div>
                            </div>
                        </div>
                        <div className='my-6'>
                            <label className='flex gap-1 mb-4 items-center'>
                                <span className='font-[700] leading-[16px]'>Êtes-vous le propriétaire de la clinique?</span>
                                <span className='text-[#FF6551]'>*</span>
                                <InfoCircleFilled className="text-[#0094DA]" />
                            </label>
                            <div className='mt-0 flex items-center gap-4'>
                                <Checkbox>Oui</Checkbox>
                                <Checkbox>Non</Checkbox>
                            </div>
                        </div>
                        <Form.Item className='my-5'>
                            <div className='flex gap-4'>
                                <button type="submit" className='btn px-12 bg-[#0094DA] rounded-[12px] text-white h-[56px]'>
                                    Sauvegarder
                                </button>
                                <button className='btn px-12 bg-[#C0C5CE] rounded-[12px] text-black font-[500] leading-[16px] h-[56px]'>
                                    Annuler
                                </button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default CreatePage
