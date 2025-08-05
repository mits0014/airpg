import styles from './Map.module.css'

export default function Map() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Mapa</h2>
      <div className={styles.mapArea}></div>
    </div>
  )
}