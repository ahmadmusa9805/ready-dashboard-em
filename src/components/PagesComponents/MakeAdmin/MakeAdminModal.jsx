/* eslint-disable react/prop-types */
import { Form, Input, Modal, Typography } from 'antd';
import { FaTimes } from 'react-icons/fa';

const MakeAdminModal = ({ isAddModalOpen, setIsAddModalOpen }) => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <Modal
            open={isAddModalOpen}
            onCancel={() => setIsAddModalOpen(false)}
            footer={null}
            closeIcon={
                <FaTimes className="hover:text-white hover:bg-primary w-full h-full p-2 rounded-full" />
            }
        >
            <div>
                <h3 className="font-semibold py-4 text-lg">Make Admin</h3>
                <div>
                    <Form
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <div className="">
                            <div>
                                <Typography.Title level={5} style={{ color: "#1A1A1A" }}>
                                    First Name
                                </Typography.Title>
                                <Form.Item
                                    name="fName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter a first name",
                                        },
                                    ]}
                                >
                                    <Input type="text" placeholder="Type here" />
                                </Form.Item>
                            </div>
                            <div>
                                <Typography.Title level={5} style={{ color: "#1A1A1A" }}>
                                    Last Name
                                </Typography.Title>
                                <Form.Item
                                    name="lName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter a last name",
                                        },
                                    ]}
                                >
                                    <Input type="text" placeholder="Type here" />
                                </Form.Item>
                            </div>
                            <div>
                                <Typography.Title level={5} style={{ color: "#1A1A1A" }}>
                                    Email
                                </Typography.Title>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter an email",
                                        },
                                    ]}
                                >
                                    <Input type="text" placeholder="Type here" />
                                </Form.Item>
                            </div>
                            <div>
                                <Typography.Title level={5} style={{ color: "#1A1A1A" }}>
                                    Contact Number
                                </Typography.Title>
                                <Form.Item
                                    name="contactNo"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter contact number",
                                        },
                                    ]}
                                >
                                    <Input type="text" placeholder="Type here" />
                                </Form.Item>
                            </div>
                            <div>
                                <Typography.Title level={5} style={{ color: "#1A1A1A" }}>
                                    Password
                                </Typography.Title>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter an email",
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder="Type here" />
                                </Form.Item>
                            </div>
                        </div>

                        <Form.Item label={null}>
                            <button
                                // disabled={isLoading}
                                className="bg-primary font-semibold text-white px-8 py-2 rounded-md"
                                type="submit"
                            >
                                Publish
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};

export default MakeAdminModal;