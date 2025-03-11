/* eslint-disable react/no-unknown-property */
import { ConfigProvider, Form, Input } from "antd";
import { Link } from "react-router-dom";
// import bgImage from '../../../assets/images/hero.png'

const ForgotPassword = () => {

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div
            //  style={imageStyle}
            className="h-screen"
        >
            {/* Background Image */}
            <div className="bg-primary py-14  h-full">
                {/* Form Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
                        {/* Login Form */}
                        <div className="p-8 md:py-44">
                            <div className="text-center">
                                <h1 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
                                    Forgot Password
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
                                    name="basic"
                                    layout="vertical"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: "Please input your email!" },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Enter your email"
                                            className="rounded-none py-2"
                                        />
                                    </Form.Item>

                                    <Form.Item className="text-center mt-6">
                                        <Link to={`/auth/verification-code`}>
                                            <button
                                                type="primary"
                                                //   disabled={isLoading}
                                                htmltype="submit"
                                                className="bg-primary text-white px-5 py-2 rounded-none"
                                            >
                                                {/* Send Code {isLoading && <Spin></Spin>} */}
                                                Send Code
                                            </button>
                                        </Link>
                                    </Form.Item>
                                </Form>
                            </ConfigProvider>
                        </div>

                        {/* Welcome Back Section */}
                        <div className="p-8 bg-[#c9dffd] text-center flex flex-col justify-center">
                            <p className="mb-6 text-center">
                                Welcome to out forgot password page ! provide your email for
                                confirm 4 digit verification code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
