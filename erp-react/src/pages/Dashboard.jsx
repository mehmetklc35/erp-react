import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // Veri çekme işlemi
  useEffect(() => {
    // Kullanıcıları çek
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));

    // Ürünleri çek
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    // Sipariş simülasyonu: ürünlerden rastgele siparişler oluştur

    setOrders([
      { id: 1, userId: 3, productId: 5 },
      { id: 2, userId: 6, productId: 12 },
      { id: 3, userId: 2, productId: 8 },
    ]);
  }, []);

  const stats = [
    { label: "Toplam Kullanıcı", value: users.length },
    { label: "Toplam Ürün", value: products.length },
    { label: "Toplam Sipariş", value: orders.length },
    { label: "Bekleyen Sipariş", value: 1 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">📊 Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all"
          >
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <p className="text-3xl font-semibold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
