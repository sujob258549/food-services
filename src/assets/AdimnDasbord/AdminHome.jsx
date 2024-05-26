import React from 'react';
import { BsFillBookFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { PiBookOpenUserFill } from "react-icons/pi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector } from 'recharts';
import './admin.css';

const AdminHome = () => {
    const barData = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const pieData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <h1 className="text-xl font-medium font-cinzel">Hi welcome bake!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 text-white">
                <div className="flex gap-5 rounded-md py-5 px-5 items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">205</h3>
                        <p className="text-2xl ">Revenue</p>
                    </div>
                </div>
                <div className="flex gap-5 rounded-md py-5 px-5 items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">205</h3>
                        <p className="text-2xl ">Customers</p>
                    </div>
                </div>
                <div className="flex gap-5 rounded-md py-5 px-5 items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">205</h3>
                        <p className="text-2xl ">Products</p>
                    </div>
                </div>
                <div className="flex gap-5 rounded-md py-5 px-5 items-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">205</h3>
                        <p className="text-2xl ">Orders</p>
                    </div>
                </div>
            
        </div>
            {/* Profile and activities */ }
    <div className="md:flex py-10  items-center">
        <div className="text-center w-full md:w-[50%] bg-[#FFEDD5] min-h-80 flex flex-col justify-center ">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={barData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {barData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        <div className="border-4 h-80 border-[#D1A054] "></div>
        <div className="bg-[#FEF9C3] p-10 flex-1">
            <h3 className="text-4xl font-semibold font-cinzel ">Your Activity</h3>
            <div className="">
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
        </div >
    );
};

export default AdminHome;
