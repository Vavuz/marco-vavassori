import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src="https://static.vecteezy.com/system/resources/previews/022/483/476/non_2x/patient-3d-student-boy-with-problem-solving-skills-on-white-background-transparent-background-free-png.png" className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="https://cdn-icons-png.flaticon.com/512/5339/5339184.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>Aoooo sono un software develper</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://cdn-icons-png.flaticon.com/512/5339/5339184.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>Aoooo sono un software develper</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://cdn-icons-png.flaticon.com/512/5339/5339184.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Professional Sleeper</h3>
              <p>Aoooo sono un software develper</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
