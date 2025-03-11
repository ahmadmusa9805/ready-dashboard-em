import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import dashboard from '../../assets/dashboard.svg'
import userManagement from '../../assets/user-management.svg'
import addSkill from '../../assets/add-skill.svg'
import addAudio from '../../assets/add-audio.svg'
import reportManagement from '../../assets/report-management.svg'
import makeAdmin from '../../assets/make-admin.svg'
import settings from '../../assets/settings.svg'
import { CiLogout } from 'react-icons/ci';
const { Sider } = Layout;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    return (
        <div className='fixed top-0 left-0 bottom-0 bg-[#ffffff]'>
            <Sider className='h-[100vh] w-[300px] bg-[#ffffff]' width={250} collapsedWidth={80} trigger={null} collapsible collapsed={collapsed}>
                <div className=' flex justify-center items-center py-7'>
                    <img src={logo} className=' w-28' />
                </div>

                <Menu
                    mode="inline"
                    className='px-2 custom-menu'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <img src={dashboard} />,
                            label: <Link className='' to={`/`}>Dashboard</Link>,
                        },
                        {
                            key: '2',
                            icon: <img src={userManagement} className='menu-icon' />,
                            label: <span>User Management</span>,
                            children: [
                                {
                                    key: "2-1",
                                    label: <Link className={``} to={`/user-management/all-user`}>All User</Link>,
                                },
                                {
                                    key: "2-2",
                                    label: <Link className={``} to={`/user-management/all-donor`}>All Donor</Link>,
                                },
                            ]
                        },
                        {
                            key: '3',
                            icon: <img src={addSkill} className='menu-icon' />,
                            label: <Link to={`/add-skill-category`}>Add Skill Category</Link>,
                        },
                        {
                            key: '4',
                            icon: <img src={addAudio} className='menu-icon' />,
                            label: <Link to={`/add-audio-topic`}>Add Audio Topic</Link>,
                        },
                        {
                            key: '5',
                            icon: <img src={reportManagement} className='menu-icon' />,
                            label: <Link to={`/report-management`}>Report Management</Link>,
                        },
                        {
                            key: '6',
                            icon: <img src={makeAdmin} className='menu-icon' />,
                            label: <Link to={`/make-admin`}>Make Admin</Link>,
                        },
                        {
                            key: '7',
                            icon: <img src={settings} className='menu-icon' />,
                            label: <sapn>Settings</sapn>,
                            children: [
                                {
                                    key: "7-1",
                                    label: <Link className={``} to={`/settings/about-us`}>About Us</Link>,
                                },
                                {
                                    key: "7-2",
                                    label: <Link className={``} to={`/settings/contact-us`}>Contact Us</Link>,
                                },
                                {
                                    key: "7-3",
                                    label: <Link className={``} to={`/settings/privacy-policy`}>Privacy Policy</Link>,
                                },
                                {
                                    key: "7-4",
                                    label: <Link className={``} to={`/settings/terms-and-condtion`}>Terms And Condition</Link>,
                                },
                            ]
                        },
                    ]}
                />
            </Sider>
            <Link to={`/auth/login`}>
                <div
                    // onClick={handleLogOut}
                    className=" absolute bottom-12 w-full flex justify-center cursor-pointer gap-3 items-center"
                >
                    <CiLogout className=" w-8 h-8 text-primary" />
                    <p className=" text-primary text-lg">Log Out</p>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;