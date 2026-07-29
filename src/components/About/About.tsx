import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src="https://static.vecteezy.com/system/resources/previews/022/483/476/non_2x/patient-3d-student-boy-with-problem-solving-skills-on-white-background-transparent-background-free-png.png" className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="https://cdn-icons-png.flaticon.com/512/6674/6674591.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I'm a software engineer focused on building reliable desktop and web applications with <b>C#/.NET</b>, <b>WPF</b>, <b>Azure Functions</b>, and <b>React</b>. I also work with <b>Angular</b>, <b>Flask</b>, <b>Node.js</b>, and <b>Python</b>, with experience across full-stack delivery, automated testing, and cloud-enabled development.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f1ee-1f1f9.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Bilingual</h3>
              <p>I’m bilingual in <b>Italian</b> and <b>English</b>, and I’m always happy to chat about software engineering, teamwork, or new opportunities.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
