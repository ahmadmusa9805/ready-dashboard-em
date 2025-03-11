import { Link } from "react-router-dom";

const SuccessfullyChangedPasswordPage = () => {
    // const [form] = Form.useForm();
    // const onFinish = (values) => {
    //   console.log(values);
    // };

    return (
        <div className="h-screen">
            {/* Background Image */}
            <div className="bg-primary py-14  h-full">
                {/* Form Container */}
                <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
                    <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
                        {/* Login Form */}
                        <div className="p-8 py-[100px] md:py-[250px] text-center">
                            <h2 className=" text-2xl font-semibold mb-6">Congratulations</h2>
                            <Link to={`/auth/login`}>
                                <button
                                    type="primary"
                                    //   htmltype="submit"
                                    className="bg-primary text-white text-lg px-12 py-1 rounded-none"
                                >
                                    Continue
                                </button>
                            </Link>
                        </div>

                        {/* Welcome Back Section */}
                        <div className=" px-6 py-10 md:p-20 bg-[#c9dffd] text-center flex flex-col justify-center">
                            <p className="mb-6 text-center">
                                Your password has been updated, please change your password
                                regularly to avoid this happening
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessfullyChangedPasswordPage;
