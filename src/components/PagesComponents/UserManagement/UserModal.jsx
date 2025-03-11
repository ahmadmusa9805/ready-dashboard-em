/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { FaTimes } from "react-icons/fa";


const UserModal = ({ isModalOpen, handleOk, handleCancel }) => {

    return (
        <div>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closeIcon={
                    <div className="hover:bg-primary p-2 rounded-full mt-2 mr-2">
                        <FaTimes className="text-white" />
                    </div>
                }
            >
                <div className="-m-3 ">
                    <div className="bg-[#8da1c2] flex items-center justify-center py-8 mt-1">
                        <div className="space-y-3">
                            <div>
                                <img
                                    src={`https://avatar.iran.liara.run/public`}
                                    className="rounded-full h-28 w-28 object-cover"
                                />
                            </div>

                            <h2 className="text-lg font-semibold text-center text-white">
                                Emon
                            </h2>
                            <h2 className="text-lg text-center text-white">
                                patient
                            </h2>
                        </div>
                    </div>
                    <div className=" my-4 px-3">
                        <div className=" flex items-center gap-3">
                            <span className=" text-sm bg-gray-200 px-5 rounded-md">Artist</span>
                            <span className=" text-sm bg-gray-200 px-5 rounded-md">Musician</span>
                        </div>
                        <div>
                            <h2 className=" text-xl my-3">8.1K Followers</h2>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Email</h2>
                            <h2 className="">emon@gmail.com</h2>
                        </div>
                        <div className=" mt-4">
                            <h2 className="text-lg font-semibold">Contact No</h2>
                            <h2 className="">+919355574544</h2>
                        </div>
                        <div className=" mt-4">
                            <h2 className="text-lg font-semibold">Date of birth</h2>
                            <h2 className="">17 dec, 2024</h2>
                        </div>
                        <div className=" mt-4">
                            <h2 className="text-lg font-semibold">Address</h2>
                            <h2 className="">68/ Joker Vila, Gotham City</h2>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default UserModal;