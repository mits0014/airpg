import styles from './CharacterCard.module.css'

const raça = "Humano";
const classe = "Guerreiro";
const peso = "67";
const altura = "181";
const nome = "ingrid";
export default function CharacterCard() {
  return (
    <div className={styles.maincard}>
      <div className={styles.portraitHolder}>
        <div className={styles.gridTwo}>
          <div className={styles.informationgrid}>
            <div className={styles.characterid}>
              <div>
                <p>Raça : {raça}</p>
                <p>Classe : {classe}</p>
              </div>
              <div>
                <p>Peso : {peso}</p>
                <p>Altura : {altura}</p>
              </div>
            </div> {/* finaliza div charaterid*/}
            <div className={styles.flex}> {/*inicia a div que divide a tela em duas colunas*/}
              <div>
                <p>elemento</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className={styles.card}>
                    <div className={styles.gridThree}>
                      <div>18<br /> FOR</div>
                      <div>10<br />DES</div>
                      <div>14<br />CONS</div>
                    </div>
                    <div className={styles.inerCard}>
                      <div className={styles.barSection}>
                        <div className={styles.barLabel}>Vida <span>30/30</span></div>
                        <div className={`${styles.bar} ${styles.red}`}></div>
                      </div>
                    </div>
                    <div className={styles.inerCard}>
                      <div className={styles.barSection}>
                        <div className={styles.barLabel}>Mana <span>30/30</span></div>
                        <div className={`${styles.bar} ${styles.blue}`}></div>
                      </div>
                    </div>
                    <div className={styles.inerCard}>
                      <div className={styles.skills}>
                        <h3>Habilidades</h3>
                        <div className={styles.dots}>
                          {Array(8).fill(0).map((_, i) => (
                            <div key={i} className={styles.dot}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className={styles.inerCard}>
                      <h3>História</h3>
                      <div>
                        A Loba de Velyndor. No coração do continente de Eldaros, entre montanhas enevoadas e vales esquecidos...
                      </div>
                    </div>
                    <div className={styles.inerCard} >
                      <h3>Ligações</h3>
                      <ul className={styles.list}>
                        <li><span>Npc 1</span><span>100</span></li>
                        <li><span>Npc 2</span><span>100</span></li>
                        <li><span>Npc 3</span><span>100</span></li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.titulo}>{nome}</h2>
            <div className={styles.gridThree}>
              <div>18<br /> FOR</div>
              <div>10<br />DES</div>
              <div>14<br />CONS</div>
              <div>18<br />CHAR </div>
              <div>10<br /> INT</div>
              <div>3<br /> SAB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
