import styles from './Inventory.module.css'
const items = [
  { name: 'Item 1', quantity: 2 },
  { name: 'Item 2', quantity: 2 },
  { name: 'Item 3', quantity: 1 },
  { name: 'Item 4', quantity: 3 },
  { name: 'Item 5', quantity: 1 },
  { name: 'Item 6', quantity: 5 },
  // Adicione mais itens conforme necessário
];

export default function Inventory() {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Inventário</p>
      <div className={styles.inerCard}>
        <div>
          <h3 className={styles.subtitle}>Equipamento</h3>
          <div className={styles.equipmentGrid}>
            <div className={styles.charaterPlaceholder}>
            </div>
            <div>
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className={styles.slot}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.inerCard}>
          <h3 className={styles.subtitle}>Itens</h3>
          <div className={styles.itemsContainer}>
            <ul className={styles.list}>
              {items.map((items, index) => (
                <li key={index} className={styles.listItem}>
                  <span >{items.name}</span>
                  <span>x{items.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}