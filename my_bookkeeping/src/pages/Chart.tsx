import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useMemo } from "react";

Chart.register(ArcElement, Tooltip, Legend);

type Transaction = {
  tanggal: string;
  nominal: number;
  kategori: string;
  deskripsi: string;
};

const dummyTransactions: Transaction[] = [
  { tanggal: "2025-03-01", nominal: 50000, kategori: "Food", deskripsi: "Bought lunch" },
  { tanggal: "2025-03-02", nominal: 100000, kategori: "Shopping", deskripsi: "Bought a T-shirt" },
  { tanggal: "2025-03-03", nominal: 20000, kategori: "Transportation", deskripsi: "Bus fare" },
  { tanggal: "2025-03-04", nominal: 150000, kategori: "Entertainment", deskripsi: "Movie ticket" },
  { tanggal: "2025-03-05", nominal: 75000, kategori: "Food", deskripsi: "Dinner at restaurant" },
  { tanggal: "2025-03-06", nominal: 50000, kategori: "Groceries", deskripsi: "Bought vegetables" },
  { tanggal: "2025-03-07", nominal: 25000, kategori: "Transportation", deskripsi: "Taxi ride" },
  { tanggal: "2025-03-08", nominal: 500000, kategori: "Shopping", deskripsi: "New sneakers" },
  { tanggal: "2025-03-09", nominal: 120000, kategori: "Food", deskripsi: "Family dinner" },
  { tanggal: "2025-03-10", nominal: 30000, kategori: "Entertainment", deskripsi: "Arcade games" },
];

export default function TransactionChart() {
  const categoryData = useMemo(() => {
    const totals: Record<string, number> = {};

    dummyTransactions.forEach(({ kategori, nominal }) => {
      totals[kategori] = (totals[kategori] || 0) + nominal;
    });

    return totals;
  }, []);

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: "Total Spending",
        data: Object.values(categoryData),
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h2>Spending by Category</h2>
      <div style={{ width: "50%", margin: "auto" }}>
        <Pie data={data} />
      </div>
    </div>
  );
}
