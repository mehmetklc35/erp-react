import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaUsers, FaBox, FaShoppingCart, FaClock } from "react-icons/fa";
import Chart from "../components/Chart";

const orderStats = [
  { month: "Ocak", orders: 15 },
  { month: "Şubat", orders: 20 },
  { month: "Mart", orders: 12 },
  { month: "Nisan", orders: 18 },
  { month: "Mayıs", orders: 25 },
  { month: "Haziran", orders: 10 },
];

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    // Sahte sipariş verisi
    setOrders([
      { id: 1, userId: 3, productId: 5 },
      { id: 2, userId: 6, productId: 12 },
      { id: 3, userId: 2, productId: 8 },
    ]);
  }, []);

  const stats = [
    {
      label: "Toplam Kullanıcı",
      value: users.length,
      icon: <FaUsers className="text-blue-500 text-4xl" />,
      bg: "bg-blue-50 dark:bg-blue-900",
    },
    {
      label: "Toplam Ürün",
      value: products.length,
      icon: <FaBox className="text-green-500 text-4xl" />,
      bg: "bg-green-50 dark:bg-green-900",
    },
    {
      label: "Toplam Sipariş",
      value: orders.length,
      icon: <FaShoppingCart className="text-yellow-500 text-4xl" />,
      bg: "bg-yellow-50 dark:bg-yellow-900",
    },
    {
      label: "Bekleyen Sipariş",
      value: 1,
      icon: <FaClock className="text-red-500 text-4xl" />,
      bg: "bg-red-50 dark:bg-red-900",
    },
  ];

  const totalOrders = orderStats.reduce((sum, item) => sum + item.orders, 0);
  const peakMonth = orderStats.reduce((max, item) =>
    item.orders > max.orders ? item : max
  );

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          📊 Dashboard
        </h1>

        {/* İstatistik Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-[1.02] transition-all ${stat.bg}`}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                {stat.icon}
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  <CountUp end={stat.value} duration={1.5} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Son Eklenen Kullanıcılar */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
            👥 Son Eklenen Kullanıcılar
          </h2>
          <ul className="divide-y divide-gray-100 dark:divide-gray-700">
            {users.slice(0, 5).map((user) => (
              <li
                key={user.id}
                className="py-2 text-gray-700 dark:text-gray-300"
              >
                {user.firstName} {user.lastName} – {user.email}
              </li>
            ))}
          </ul>
        </div>

        {/* Grafik + Açıklama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Chart data={orderStats} />
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">
              📌 Özet Bilgi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Son 6 ayda toplam <span className="font-bold">{totalOrders}</span>{" "}
              sipariş alınmıştır.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              En yoğun sipariş ayı:{" "}
              <span className="font-semibold">{peakMonth.month}</span> (
              {peakMonth.orders} sipariş)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
