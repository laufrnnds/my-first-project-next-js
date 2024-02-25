import DefaultLayout from "../layout/default";
import styles from "@/styles/styles.module.css";
import style from "@/pages/products/styles.module.css";
import Table from "./components/table";
import ListProducts from "./components/list-products";

export default function Products() {
  const list = [
    { id: 1, name: "Pencil", category: "1" },
    { id: 2, name: "Pen", category: "1" },
    { id: 3, name: "Rubber", category: "1" },
    { id: 4, name: "Journal", category: "2" },
    { id: 5, name: "Schedule", category: "2" },
  ];
  const columns = [
    { key: "id", label: "Code" },
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "price", label: "Price" },
    { key: "category", label: "Category" },
  ];
  const data = [
    {
      id: 1,
      name: "Pencil",
      price: "2.00",
      description: "Pencil description",
      category: "1",
    },
    {
      id: 2,
      name: "Pen",
      price: "1.00",
      description: "Pen description",
      category: "1",
    },
    {
      id: 3,
      name: "Rubber",
      description: "Rubber description",
      category: "1",
    },
    {
      id: 4,
      name: "Journal",
      price: "12.00",
      description: "Journal description",
      category: "2",
    },
    {
      id: 5,
      name: "Schedule",
      price: "15.00",
      description: "Schedule description",
      category: "2",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Produtcs</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={style.listTable}>
        <ListProducts products={list} />
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

Products.getLayout = DefaultLayout;
