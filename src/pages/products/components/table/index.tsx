import styles from "@/pages/products/components/table/styles.module.css";

interface TableProps {
  columns: { key: string; label: string }[];
  data: any[];
}

export default function Table({ columns, data }: TableProps) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.columns}>
            {columns.map((column) => (
              <th key={column.key} className={styles.column}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column, index) => {
                if (index === 0) {
                  return (
                    <td key={item.id} className={styles.rows}>
                      {item[column.key as keyof typeof item]}
                    </td>
                  );
                }
                return (
                  <td key={item.id} className={styles.row}>
                    {item[column.key as keyof typeof item] || "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
