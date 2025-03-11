/* eslint-disable no-unused-vars */
import { Button, Form, Input, Modal, Table, Typography } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import MakeAdminModal from "../../components/PagesComponents/MakeAdmin/MakeAdminModal";

const MakeAdmin = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);

    const onFinish = (values) => {
        console.log(values);
    }

    const adminData = {
        data: [
            {
                _id: "1",
                name: {
                    firstName: "John",
                    lastName: "Doe",
                },
                email: "john.doe@example.com",
                role: "User",
            },
            {
                _id: "2",
                name: {
                    firstName: "Jane",
                    lastName: "Smith",
                },
                email: "jane.smith@example.com",
                role: "Admin",
            },
            {
                _id: "3",
                name: {
                    firstName: "Michael",
                    lastName: "Johnson",
                },
                email: "michael.johnson@example.com",
                role: "User",
            },
        ],
        meta: {
            limit: 10,
            total: 3,
        },
    };

    const columns = [
        {
            title: "S No.",
            dataIndex: "id",
            render: (_, record) => <span>{record?._id}</span>,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (_, record) => <span>{record?.name?.firstName} {record?.name?.lastName}</span>,
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (_, record) => <span>{record?.email}</span>,
        },
        {
            title: "User Type",
            dataIndex: "userType",
            render: (_, record) => <span>{record?.role}</span>,
        },
        {
            title: "Action",
            render: (_, record) => (
                <div className="flex items-center">
                    <Button
                        type="text"
                        onClick={() => {
                            setCurrentRecord(record);
                        }}
                        className="w-fit px-2"
                    >
                        <FiTrash size={20} className="text-red-400 " />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="flex justify-between items-center md:px-5">
                <h2 className="text-md md:text-xl font-semibold pb-2">Make Admin</h2>
                <div>
                    <button
                        type="text"
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-primary px-5 py-3 rounded-md font-semibold  text-white"
                    >
                        + Make Admin
                    </button>
                </div>
            </div>
            <Table
                columns={columns}
                className="mt-5 overflow-x-scroll md:overflow-auto"
                dataSource={adminData?.data}
                pagination={{
                    pageSize: adminData?.meta?.limit,
                    total: adminData?.meta?.total,
                    onChange: (page) => setCurrentPage(page),
                }}
            />
            <MakeAdminModal isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen}></MakeAdminModal>
        </>
    );
}

export default MakeAdmin;