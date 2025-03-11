/* eslint-disable react/prop-types */
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const UserGrowth = () => {

    const trainerData = [
        { month: "Jan", trainer: 50 },
        { month: "Feb", trainer: 65 },
        { month: "Mar", trainer: 85 },
        { month: "Apr", trainer: 95 },
        { month: "May", trainer: 120 },
        { month: "Jun", trainer: 140 },
        { month: "Jul", trainer: 160 },
        { month: "Aug", trainer: 175 },
        { month: "Sep", trainer: 190 },
        { month: "Oct", trainer: 200 },
        { month: "Nov", trainer: 220 },
        { month: "Dec", trainer: 250 },
    ];


    const maxTrainerCount =
        trainerData.length > 0
            ? Math.max(...trainerData.map((item) => item.trainer), 100)
            : 100;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { month, trainer } = payload[0].payload;
            return (
                <div className="custom-tooltip bg-white py-3 px-2 rounded border">
                    <p className="label">{`Month: ${month}`}</p>
                    <p className="label">{`Trainers: ${trainer}`}</p>
                </div>
            );
        }
        return null;
    };


    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={trainerData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis tickLine={false} dataKey="month" />
                <YAxis tickLine={false} domain={[0, maxTrainerCount + 1]} />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                    barSize={30}
                    // radius={[5, 5, 0, 0]}
                    dataKey="trainer"
                    fill="#1c4587"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default UserGrowth;
