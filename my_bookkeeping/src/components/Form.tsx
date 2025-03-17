import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

type formProps = {
  nama: string;
}

export default function TransactionForm({nama} : formProps) {
  const [formData, setFormData] = useState({
    tanggal: "",
    nominal: "",
    kategori: "",
    deskripsi: "",
  });


  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Transaction Saved!");
  };

  return (
    <Container className="mt-4">
      <h2>{nama}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tanggal</Form.Label>
          <Form.Control type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nominal</Form.Label>
          <Form.Control type="number" name="nominal" value={formData.nominal} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select name="kategori" value={formData.kategori} onChange={handleChange} required>
            <option value="">-- Pilih Kategori --</option>
            <option value="entertainment">Entertainment</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="shopping">Shopping</option>
            <option value="etc">Etc</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control as="textarea" rows={3} name="deskripsi" value={formData.deskripsi} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Transaction
        </Button>
      </Form>
    </Container>
  );
}
