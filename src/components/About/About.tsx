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
              <p>I'm a full-stack developer skilled in <b>Angular</b> and <b>React</b> for front-end interfaces and <b>Flask</b> for back-end services, with some familiarity in <b>C# .NET</b> for scalable solutions.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://cdn-icons-png.flaticon.com/512/1643/1643996.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>I have a strong passion for data analysis. I work confidently with <b>Weka</b> and <b>OpenRefine</b> for cleaning and visualising datasets. In Python, I leverage <b>Pandas</b> for data manipulation and <b>Matplotlib</b> to create impactful visualisations, delivering clarity and actionable results.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://cdn0.iconfinder.com/data/icons/pennant-flags/64/pennant_flags_part_4-60-512.png" className={styles.talentImage}></img>
            <div className={styles.aboutItemText}>
              <h3>Bilingual</h3>
              <p>If you are fancying a conversation in <b>Italian</b> I can definitely help you with that, before coming to the UK in 2018 that's where I was.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
