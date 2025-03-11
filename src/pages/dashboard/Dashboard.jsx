import donation from '../../assets/donation.svg'
import user from '../../assets/user.svg'
import donor from '../../assets/donor.svg'
import blocked from '../../assets/blocked.svg'
import UserGrowth from '../../components/PagesComponents/Dashboard/UserGrowth';
import DonorGrowth from '../../components/PagesComponents/Dashboard/DonorGrowth';
import EarningGrowth from '../../components/PagesComponents/Dashboard/EarningGrowth';

const Dashboard = () => {
    return (
        <>
            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                <div className=" clear-start bg-white px-6 py-5 flex flex-col items-center w-full">
                    <div className=' flex items-center gap-2'>
                        <img src={donation} />
                        <h2 className=' text-lg '>Total Donation</h2>
                    </div>
                    <h2 className=' text-xl text-green-400 font-bold mt-2'>$7.2k</h2>
                </div>
                <div className=" clear-start bg-white px-6 py-5 flex flex-col items-center w-full">
                    <div className=' flex items-center gap-2'>
                        <img src={user} />
                        <h2 className=' text-lg '>Total User</h2>
                    </div>
                    <h2 className=' text-xl text-green-400 font-bold mt-2'>70+</h2>
                </div>
                <div className=" clear-start bg-white px-6 py-5 flex flex-col items-center w-full">
                    <div className=' flex items-center gap-2'>
                        <img src={donor} />
                        <h2 className=' text-lg '>Total Donor</h2>
                    </div>
                    <h2 className=' text-xl text-green-400 font-bold mt-2'>70+</h2>
                </div>
                <div className=" clear-start bg-white px-6 py-5 flex flex-col items-center w-full">
                    <div className=' flex items-center gap-2'>
                        <img src={blocked} />
                        <h2 className=' text-lg '>Blocked account</h2>
                    </div>
                    <h2 className=' text-xl text-red-500 font-bold mt-2'>10</h2>
                </div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-2 mt-5'>
                <div>
                    <h1 className="text-xl font-semibold mb-5">User Growth</h1>
                    <UserGrowth></UserGrowth>
                </div>
                <div>
                    <h1 className="text-xl font-semibold mb-5">Donor Growth</h1>
                    <DonorGrowth></DonorGrowth>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-semibold mb-5">Earning Growth</h1>
                <EarningGrowth></EarningGrowth>
            </div>
        </>
    );
};

export default Dashboard;