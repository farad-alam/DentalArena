import styles from './PricingTable.module.css';

interface PricingItem {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  note?: string;
  badge?: string;
}

interface PricingTableProps {
  items: PricingItem[];
}

export default function PricingTable({ items }: PricingTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Treatment</th>
            <th>Estimated Price (BDT)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={styles.serviceName}>
                  {item.name}
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                </div>
                <div className={styles.serviceDesc}>{item.description}</div>
              </td>
              <td className={styles.price}>{item.priceRange}</td>
              <td className={styles.note}>{item.note || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
