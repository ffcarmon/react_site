import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
    Row,
    Col,
} from 'antd';
import Dashboard from "../Dashboard";
import './Forms.css';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const Forms = () => {
    const onFinish = (values) => {
        console.log('Form Values:', values);
    };

    return (
        <Dashboard>
            <div className="form-frame">
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 1000,
                        margin: '0 auto',
                    }}
                >
                    <Row gutter={[32, 24]}>
                        {/* Column 1 */}
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                label="Accept Terms and Conditions"
                                name="termsAccepted"
                                valuePropName="checked"
                                rules={[{ required: true, message: 'Please accept terms and conditions!' }]}
                                required
                            >
                                <Checkbox>I accept the terms and conditions</Checkbox>
                            </Form.Item>
                            <Form.Item
                                label="Gender"
                                name="gender"
                                rules={[{ required: true, message: 'Please select a gender!' }]}
                                required
                            >
                                <Radio.Group>
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                    <Radio value="other">Other</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                label="Full Name"
                                name="fullName"
                                rules={[
                                    { required: true, message: 'Please enter your full name!' },
                                    {
                                        pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
                                        message: 'Full name must contain at least two words and only letters.',
                                    },
                                ]}
                                required
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please enter your email!' },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address!',
                                    },
                                ]}
                                required
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Program of Study"
                                name="programOfStudy"
                                rules={[{ required: true, message: 'Please select a program!' }]}
                                required
                            >
                                <Select style={{ width: '100%' }}>
                                    <Select.Option value="computerScience">Computer Science</Select.Option>
                                    <Select.Option value="business">Business Administration</Select.Option>
                                    <Select.Option value="engineering">Engineering</Select.Option>
                                    <Select.Option value="psychology">Psychology</Select.Option>
                                    <Select.Option value="art">Art and Design</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        {/* Column 2 */}
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                label="Preferred Subjects"
                                name="preferredSubjects"
                                rules={[{ required: true, message: 'Please select a preferred subject!' }]}
                                required
                            >
                                <TreeSelect
                                    style={{ width: '100%' }}
                                    treeData={[
                                        {
                                            title: 'Sciences',
                                            value: 'sciences',
                                            children: [
                                                { title: 'Biology', value: 'biology' },
                                                { title: 'Chemistry', value: 'chemistry' },
                                                { title: 'Physics', value: 'physics' },
                                            ],
                                        },
                                        {
                                            title: 'Humanities',
                                            value: 'humanities',
                                            children: [
                                                { title: 'History', value: 'history' },
                                                { title: 'Literature', value: 'literature' },
                                                { title: 'Philosophy', value: 'philosophy' },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Country and State of Residence"
                                name="location"
                                rules={[{ required: true, message: 'Please select your country and state!' }]}
                                required
                            >
                                <Cascader
                                    style={{ width: '100%' }}
                                    options={[
                                        {
                                            value: 'usa',
                                            label: 'United States',
                                            children: [
                                                { value: 'california', label: 'California' },
                                                { value: 'texas', label: 'Texas' },
                                                { value: 'florida', label: 'Florida' },
                                                { value: 'new-york', label: 'New York' },
                                                { value: 'illinois', label: 'Illinois' },
                                            ],
                                        },
                                        {
                                            value: 'canada',
                                            label: 'Canada',
                                            children: [
                                                { value: 'ontario', label: 'Ontario' },
                                                { value: 'quebec', label: 'Quebec' },
                                                { value: 'british-columbia', label: 'British Columbia' },
                                                { value: 'alberta', label: 'Alberta' },
                                                { value: 'manitoba', label: 'Manitoba' },
                                            ],
                                        },
                                        {
                                            value: 'india',
                                            label: 'India',
                                            children: [
                                                { value: 'maharashtra', label: 'Maharashtra' },
                                                { value: 'tamil-nadu', label: 'Tamil Nadu' },
                                                { value: 'karnataka', label: 'Karnataka' },
                                                { value: 'gujarat', label: 'Gujarat' },
                                                { value: 'rajasthan', label: 'Rajasthan' },
                                            ],
                                        },
                                        {
                                            value: 'australia',
                                            label: 'Australia',
                                            children: [
                                                { value: 'new-south-wales', label: 'New South Wales' },
                                                { value: 'victoria', label: 'Victoria' },
                                                { value: 'queensland', label: 'Queensland' },
                                                { value: 'western-australia', label: 'Western Australia' },
                                                { value: 'south-australia', label: 'South Australia' },
                                            ],
                                        },
                                        {
                                            value: 'mexico',
                                            label: 'Mexico',
                                            children: [
                                                { value: 'jalisco', label: 'Jalisco' },
                                                { value: 'nuevo-leon', label: 'Nuevo León' },
                                                { value: 'mexico-city', label: 'Mexico City' },
                                                { value: 'puebla', label: 'Puebla' },
                                                { value: 'yucatan', label: 'Yucatán' },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Date of Birth"
                                name="dateOfBirth"
                                rules={[{ required: true, message: 'Please select your date of birth!' }]}
                                required
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Academic Year"
                                name="academicYear"
                                rules={[{ required: true, message: 'Please select an academic year range!' }]}
                                required
                            >
                                <RangePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>

                        {/* Column 3 */}
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                label="Expected Graduation Year"
                                name="graduationYear"
                                rules={[
                                    { required: true, message: 'Please enter your expected graduation year!' },
                                    {
                                        pattern: /^\d{4}$/,
                                        message: 'Expected Graduation Year must be a 4-digit number.',
                                    },
                                ]}
                                required
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Additional Information"
                                name="additionalInformation"
                                rules={[{ required: true, message: 'Please provide additional information!' }]}
                                required
                            >
                                <TextArea rows={4} style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Newsletter Subscription"
                                name="newsletterSubscription"
                                valuePropName="checked"
                            >
                                <Switch />
                            </Form.Item>
                            <Form.Item
                                label="Profile Picture"
                                name="profilePicture"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                rules={[{ required: true, message: 'Please upload a profile picture!' }]}
                                required
                            >
                                <Upload action="/upload.do" listType="picture-card">
                                    <button
                                        style={{
                                            border: 0,
                                            background: 'none',
                                        }}
                                        type="button"
                                    >
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Submit Button */}
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" style={{ width: '200px' }}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Dashboard>
    );
};

export default Forms;
