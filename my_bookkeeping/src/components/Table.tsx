import { Table } from "react-bootstrap";

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

export default function TransactionTable() {
  return (
    <div className="container mt-4">
      <h2>Transaction History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Date</th>
            <th>Nominal</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dummyTransactions.map((txn, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{txn.tanggal}</td>
              <td>Rp {txn.nominal.toLocaleString()}</td>
              <td>{txn.kategori}</td>
              <td>{txn.deskripsi}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
