/* eslint-disable no-unused-vars */
import { Avatar, Input, Pagination, Table } from "antd";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";

import { CiSearch } from "react-icons/ci";
import DonorModal from "../../components/PagesComponents/UserManagement/DonorModal";

const AllDonor = () => {

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

    const getAllNewUsersData = {
        data: [
            {
                _id: "1",
                userInfo: {
                    firstName: "John",
                    lastName: "Doe",
                    profileImageUrl: "https://avatar.iran.liara.run/public/30",
                    contactNo: "123-456-7890",
                    amount: 220,
                },
                email: "john.doe@example.com",
                role: "admin",
            },
            {
                _id: "2",
                userInfo: {
                    firstName: "Jane",
                    lastName: "Smith",
                    profileImageUrl: "https://avatar.iran.liara.run/public/41",
                    contactNo: "987-654-3210",
                    amount: 25,
                },
                email: "jane.smith@example.com",
                role: "user",
            },
            {
                _id: "3",
                userInfo: {
                    firstName: "Michael",
                    lastName: "Johnson",
                    profileImageUrl: "https://avatar.iran.liara.run/public/40",
                    contactNo: "555-123-4567",
                    amount: 120,
                },
                email: "michael.johnson@example.com",
                role: "moderator",
            },
            {
                _id: "4",
                userInfo: {
                    firstName: "Emily",
                    lastName: "Davis",
                    profileImageUrl: null, // No profile image
                    contactNo: "321-654-9870",
                    amount: 50,
                },
                email: "emily.davis@example.com",
                role: "user",
            },
        ],
    };



    // Define columns for the table
    const columns = [
        {
            title: "S No.",
            key: "S No.",
            dataIndex: "S No.",
            render: (_, record) =>
                <div>
                    {record?._id}
                </div>
        },
        {
            title: "Image",
            key: "profileImage",
            dataIndex: "userInfo",
            render: (userInfo) =>
                userInfo?.profileImageUrl ? (
                    <Avatar
                        size={40}
                        src={`${userInfo?.profileImageUrl}`}
                    />
                ) : (
                    <Avatar size={40} src="https://avatar.iran.liara.run/public/43" />
                ),
        },
        {
            title: "Name",
            dataIndex: "userInfo",
            key: "name",
            render: (_, record) =>
                record?.userInfo ? (
                    <a>
                        {record?.userInfo.firstName} {record?.userInfo.lastName}
                    </a>
                ) : (
                    "N/A"
                ),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: (_, record) => (record?.email ? record?.email : "N/A"),
        },
        {
            title: "Contact Number",
            dataIndex: "contact",
            key: "contact",
            render: (_, record) =>
                record?.role ? <p className=" capitalize">{record?.userInfo?.contactNo}</p> : "N/A",
        },
        {
            title: "Donation amount",
            dataIndex: "amount",
            key: "amount",
            render: (_, record) =>
                record?.userInfo?.amount ? record.userInfo?.amount : "N/A",
        },
        {
            title: "Action",
            dataIndex: "location",
            key: "location",
            render: (_, record) =>
                <div className=" flex gap-3">
                    <IoEyeOutline onClick={showModal} className=" w-6 h-6 text-primary cursor-pointer" />
                    <LuUserCheck className=" w-6 h-6 text-green-400 cursor-pointer" />
                </div>
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className=" flex justify-between items-center mb-2">
                <h1 className="text-xl font-semibold mb-5">All Donor</h1>
                <Input prefix={<CiSearch className="w-6 h-6" />} placeholder="Search" className=" w-[300px] -mt-3 " />
            </div>

            <Table
                pagination={false}
                columns={columns}
                dataSource={getAllNewUsersData?.data || []}
                rowKey="_id"
            />
            <DonorModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></DonorModal>
            <div className=" mt-8">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={10}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default AllDonor;
