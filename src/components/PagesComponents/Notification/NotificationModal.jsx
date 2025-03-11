/* eslint-disable react/prop-types */
import { Modal } from "antd";

const NotificationModal = ({ isModalOpen, handleOk, handleCancel }) => {
    return (
        <Modal footer={null} title="Notification" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="space-y-1.5 py-5">
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
        </Modal>
    );
};

export default NotificationModal;