/* eslint-disable no-unused-vars */
import { Avatar, Badge, Button, Layout, theme } from 'antd';
import { HiOutlineBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';
// import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;


// eslint-disable-next-line react/prop-types
const MainHeader = ({ setCollapsed, collapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div >
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className=' flex justify-end pr-4  bg-[#ffffff]'>
                    {/* <Button
                        type="text"
                        icon={collapsed ? <RxHamburgerMenu className=' text-white -ml-8 w-8 h-8 ' /> : <RxHamburgerMenu className=' text-white -ml-8 w-8 h-8 ' />}
                        onClick={() => setCollapsed(!collapsed)}
                        className=' text-white '
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    /> */}
                    <div className=' flex items-center gap-6'>
                        <div>
                            <Link className='flex items-center' to={`/notification`}>
                                <Badge size="small" className=' cursor-pointer' count={5}>
                                    <HiOutlineBell className=' w-7 h-7' />
                                </Badge>
                            </Link>
                        </div>
                        <Link to={`/profile`}>
                            <div className=' flex items-center gap-2 cursor-pointer '>
                                <Avatar src={`https://avatar.iran.liara.run/public/24`} size={40} className=' ring-1 ring-[#1c4587]' />
                                <p className=' text-black font-semibold'>Side Leader Sarwar</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </Header>
        </div>
    );
};

export default MainHeader;