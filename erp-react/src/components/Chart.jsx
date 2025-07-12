// src/components/Chart.jsx

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <div className="w-full h-[300px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
        📈 Aylık Sipariş Sayısı
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="month"
            stroke="#94a3b8"
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          <YAxis
            stroke="#94a3b8"
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#f1f5f9", border: "none" }}
            labelStyle={{ color: "#475569" }}
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            strokeWidth={3}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
