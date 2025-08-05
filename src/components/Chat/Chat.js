import styles from './Chat.module.css'

export default function Chat() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Chat</h2>
      <div className={styles.chatWindow}>
        <div className={styles.chatMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tortor quis massa pretium...
        </div>
      </div>
      <input type="text" placeholder="Digite uma mensagem..." className={styles.chatInput} />
    </div>
  )
}