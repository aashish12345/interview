import { Form, Input, Button, DatePicker, Upload } from 'antd';
import "antd/dist/antd.css";
import { useState } from 'react';


const Registration = () => {
    let [file, setFile] = useState();
    let RegistrationDetails = {};
    const saveRegistrationDetails = (item) => {
        RegistrationDetails = {
            FirstName: item.firstName,
            LastName: item.lastName,
            Dob: item.DOB.format('YYYY-MM-DD'),
            Designation: item.designation,
            Experience: item.experience,
            File: file
        }
        console.log("Data IS...", RegistrationDetails);
    }
    const props = {
        name: 'file',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
                setFile(info.fileList);
            }

        },
    };
    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                id="myForm" onFinish={saveRegistrationDetails}
                style={{ marginTop: 100 }}
            >
                <Form.Item label="First name" name="firstName" rules={[
                    {
                        required: true,
                        message: 'Please enter First Name',
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Last Name',
                        }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item style={{ marginLeft: 200 }}>
                    <Upload {...props}>
                        <Button>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="DOB" name="DOB"
                    rules={[
                        {
                            required: true,
                            message: 'Please select DOB',
                        }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Designation" name="designation"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter First Name',
                        }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Experience" name="experience" rules={[
                    {
                        required: true,
                        message: 'Please enter your experience ex: 5 year',
                    }]}>
                    <Input />
                </Form.Item>
             
                <Form.Item style={{ marginLeft: 170 }}>
                    <Button type="success" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}
export default Registration;