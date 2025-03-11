/* eslint-disable no-unused-vars */
import { ConfigProvider, Form, Input, Spin } from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";


const SetNewPassword = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');

    // console.log('Base URL:', import.meta.env.VITE_BASE_URL);


    const onFinish = (values) => {
        console.log(values);
    };


    return (
        <div className="h-screen">
            {/* Background Image */}
            <div className="bg-primary py-14  h-full">
                {/* Form Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
                        {/* Login Form */}
                        <div className="p-8 md:py-44">
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold mt-6 mb-4">
                                    Set New Password
                                </h1>
                            </div>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Input: {
                                            activeBorderColor: "#6a9576",
                                            hoverBorderColor: "#6a9576",
                                            colorBorder: "#6a9576",
                                            controlHeight: 40,
                                        },
                                    },
                                }}
                            >
                                <Form
                                    form={form}
                                    onFinish={onFinish}
                                    name="dependencies"
                                    autoComplete="off"
                                    style={{ maxWidth: 600 }}
                                    layout="vertical"
                                >
                                    <Form.Item
                                        label="New Password"
                                        name="newPassword"
                                        rules={[{ required: true }]}
                                    >
                                        <Input.Password
                                            placeholder="New Password"
                                            className="rounded-none py-2"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        rules={[{ required: true }]}
                                    >
                                        <Input.Password
                                            placeholder="Confirm Password"
                                            className="rounded-none py-2"
                                        />
                                    </Form.Item>

                                    <Form.Item className="text-center mt-6">
                                        <Link to={"/auth/successfully-changed-password"}>
                                        <button
                                            type="submit"
                                            //   disabled={isLoading}
                                            className="bg-primary text-white text-lg px-8 py-2 rounded-none"
                                        >
                                            {/* Submit {isLoading && <Spin></Spin>} */}
                                            Submit
                                        </button>
                                        </Link>
                                    </Form.Item>
                                </Form>
                            </ConfigProvider>
                        </div>

                        {/* Welcome Back Section */}
                        <div className=" px-6 py-10 md:p-14 bg-[#c9dffd] text-center flex flex-col justify-center">
                            <p className="mb-6 text-center">
                                Create a new password. insure it differs from previous one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
