/* eslint-disable react/prop-types */
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const DonorGrowth = () => {

    const UserData = [
        { month: "Jan", user: 50 },
        { month: "Feb", user: 120 },
        { month: "Mar", user: 85 },
        { month: "Apr", user: 95 },
        { month: "May", user: 120 },
        { month: "Jun", user: 140 },
        { month: "Jul", user: 160 },
        { month: "Aug", user: 130 },
        { month: "Sep", user: 190 },
        { month: "Oct", user: 120 },
        { month: "Nov", user: 220 },
        { month: "Dec", user: 100 },
    ];


    // Custom Tooltip for the chart
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { month, user } = payload[0].payload;
            return (
                <div className="custom-tooltip bg-white py-3 px-2 rounded border">
                    <p className="label">{`Month: ${month}`}</p>
                    <p className="label">{`Users: ${user}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={UserData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1c4587" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#1c4587" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis tickLine={false} dataKey="month" />
                <YAxis tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                    type="monotone"
                    dataKey="user"
                    stroke="#1c4587"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default DonorGrowth;
