import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { IoAdd } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import AddEmail from "../../../components/PagesComponents/Settings/ContactUs/AddEmail";
import AddSocialLink from "../../../components/PagesComponents/Settings/ContactUs/AddSocialLink";

const ContactUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalSocialLinkOpen, setIsModalSocialLinkOpen] = useState(false);

    // console.log("contactData", contactData);
    // modal ends
    // const [email, setEmail] = useState("");

    // for email:
    const showModal = () => {
        setIsModalOpen(true)
    };
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)

    }

    const handleSocialLinkModalOpen = () => {
        setIsModalSocialLinkOpen(true);
    }
    const handleSocialLinkOk = () => {
        setIsModalSocialLinkOpen(false);
    }
    const handleSocialLinkCancel = () => {
        setIsModalSocialLinkOpen(false);
    }



    return (
        <>
            <h3 className="font-semibold pb-5 text-xl">Terms And Condition</h3>
            <div className=" flex gap-5">

                <div className="  mx-auto flex flex-col justify-start bg-white px-10 py-8 w-full">
                    <div className="flex justify-start items-center gap-3 ">
                        <span className="bg-primary rounded-full">
                            <TfiEmail className="text-white  h-10 w-10 p-2" />
                        </span>

                        <p className="text-xl text-textColor">Write To US</p>
                    </div>
                    <div className="my-6 w-full">
                        <div className="flex flex-col justify-center items-center gap-5 mb-5 w-full">

                            <div className="flex justify-center items-center gap-5 w-full">
                                <p className="px-5 py-2 border-2 rounded-lg w-full">emon@gmail.com </p>
                                <RxCross1 className="h-6 w-6 cursor-pointer" />
                            </div>

                        </div>
                        <div className=" flex justify-end">
                            <button
                                onClick={showModal}
                                className=" bg-primary text-white font-semiboldbold text-xl rounded-full shadow-lg flex justify-end items-end"
                                type="submit"
                            >
                                <IoAdd className="text-white bg-primary h-10 w-10 p-1 rounded-full"></IoAdd>
                            </button>
                        </div>
                        <AddEmail isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></AddEmail>
                    </div>
                </div>

                <div className="  mx-auto flex flex-col justify-start bg-white px-10 py-8 w-full">
                    <div className="flex justify-start items-center gap-3 ">

                        <p className="text-xl text-textColor">Add Social media link</p>
                    </div>
                    <div className="my-6 w-full">
                        <div className="flex flex-col justify-center items-center gap-5 mb-5 w-full">

                            <div className="flex justify-center items-center gap-5 w-full">
                                <div className=" w-full">
                                    <p className="mb-2">Facebook  </p>
                                    <p className="px-3 py-2 border-2 rounded-lg w-full">Facebook Url</p>
                                </div>

                                <RxCross1 className="h-6 w-6 cursor-pointer mt-7" />
                            </div>

                            <div className="flex justify-center items-center gap-5 w-full">
                                <div className=" w-full">
                                    <p className="mb-2">Twitter  </p>
                                    <p className="px-3 py-2 border-2 rounded-lg w-full">Twitter URL</p>
                                </div>

                                <RxCross1 className="h-6 w-6 cursor-pointer mt-7" />
                            </div>

                        </div>
                        <div className=" flex justify-end">
                            <button
                                onClick={handleSocialLinkModalOpen}
                                className=" bg-primary text-white font-semiboldbold text-xl rounded-full shadow-lg flex justify-end items-end"
                                type="submit"
                            >
                                <IoAdd className="text-white bg-primary h-10 w-10 p-1 rounded-full"></IoAdd>
                            </button>
                        </div>
                        <AddEmail isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></AddEmail>
                        <AddSocialLink isModalSocialLinkOpen={isModalSocialLinkOpen} handleSocialLinkOk={handleSocialLinkOk} handleSocialLinkCancel={handleSocialLinkCancel}></AddSocialLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ContactUs;