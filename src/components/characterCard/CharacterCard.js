import styles from './CharacterCard.module.css'

export default function CharacterCard() {
  return (
    <div className={styles.card}>
      <div className={styles.gridTwo}>
        <div>Raça</div><div>Altura</div>
      </div>
      <div className={styles.portrait}>
        <img src="/portrait.jpg" alt="Personagem" className={styles.portraitImg} />
      </div>
      <div className={styles.gridThree}>
        <div>FOR<br />18</div>
        <div>DES<br />10</div>
        <div>CONS<br />3</div>
      </div>
      <div className={styles.barSection}>
        <div className={styles.barLabel}>Vida <span>30/30</span></div>
        <div className={`${styles.bar} ${styles.red}`}></div>
        <div className={styles.barLabel}>Mana <span>30/30</span></div>
        <div className={`${styles.bar} ${styles.blue}`}></div>
      </div>
      <div className={styles.skills}>
        <h3>Habilidades</h3>
        <div className={styles.dots}>
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className={styles.dot}></div>
          ))}
        </div>
      </div>
      <div>
        <h3>História</h3>
        <div className={styles.textBox}>
          A Loba de Velyndor. No coração do continente de Eldaros, entre montanhas enevoadas e vales esquecidos...
        </div>
      </div>
      <div>
        <h3>Ligações</h3>
        <ul className={styles.list}>
          <li><span>Npc 1</span><span>100</span></li>
          <li><span>Npc 2</span><span>100</span></li>
          <li><span>Npc 3</span><span>100</span></li>
        </ul>
      </div>
    </div>
  )
}
