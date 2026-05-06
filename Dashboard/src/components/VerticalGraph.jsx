import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#94a3b8",
        font: { family: "Inter", size: 12, weight: "500" },
        padding: 16,
        usePointStyle: true,
        pointStyle: "rectRounded",
      },
    },
    title: {
      display: true,
      text: "Holdings — Stock Prices",
      color: "#f1f5f9",
      font: { family: "Inter", size: 15, weight: "600" },
      padding: { bottom: 20 },
    },
    tooltip: {
      backgroundColor: "rgba(17, 24, 39, 0.95)",
      titleColor: "#f1f5f9",
      bodyColor: "#94a3b8",
      borderColor: "rgba(55, 65, 81, 0.5)",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
      titleFont: { weight: "600", size: 13, family: "Inter" },
      bodyFont: { size: 12, family: "Inter" },
      callbacks: {
        label: function (context) {
          return ` ₹${context.parsed.y.toLocaleString("en-IN")}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#64748b",
        font: { family: "Inter", size: 11 },
      },
      grid: {
        color: "rgba(55, 65, 81, 0.25)",
      },
      border: {
        color: "rgba(55, 65, 81, 0.4)",
      },
    },
    y: {
      ticks: {
        color: "#64748b",
        font: { family: "Inter", size: 11 },
        callback: function (value) {
          return "₹" + value.toLocaleString("en-IN");
        },
      },
      grid: {
        color: "rgba(55, 65, 81, 0.15)",
      },
      border: {
        color: "rgba(55, 65, 81, 0.4)",
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}