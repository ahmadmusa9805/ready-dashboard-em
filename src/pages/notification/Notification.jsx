import { useState } from "react";
import NotificationModal from "../../components/PagesComponents/Notification/NotificationModal";

const Notification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className="flex items-center justify-between pb-5">
                <h3 className="font-semibold text-xl">Notification</h3>
                <button
                    type="text"
                    className="bg-primary font-semibold text-white px-8 py-2 rounded-md"
                >
                    Read All
                </button>
            </div>

            <div className="space-y-4">
                {/* {notification?.data?.map((item) => ( */}
                <div
                    // key={item?._id}
                    className="flex items-center justify-between bg-[#c0d3f2] py-3 px-4 hover:bg-opacity-80"
                >
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center gap-5">
                            <h2 className="font-semibold text-lg">A new messege has arrived</h2>
                            <p className="text-md">
                                {/* {new Date(item?.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}{' '} */}
                                8:00am, today
                                {/* {new Date(item?.createdAt).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })} */}
                            </p>
                        </div>
                        <p className="text-gray-700">
                            A new content has been uploaded to car study
                        </p>
                    </div>
                    <button onClick={() => setIsModalOpen(true)}>View</button>
                </div>

                <div
                    // key={item?._id}
                    className="flex items-center justify-between bg-white py-3 px-4 hover:bg-opacity-80"
                >
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center gap-5">
                            <h2 className="font-semibold text-lg">A new messege has arrived</h2>
                            <p className="text-md">
                                {/* {new Date(item?.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}{' '} */}
                                8:00am, today
                                {/* {new Date(item?.createdAt).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })} */}
                            </p>
                        </div>
                        <p className="text-gray-700">
                            A new content has been uploaded to car study
                        </p>
                    </div>
                    <button onClick={showModal}>View</button>
                </div>
            </div>
            <NotificationModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></NotificationModal>
        </div>
    );
};

export default Notification;