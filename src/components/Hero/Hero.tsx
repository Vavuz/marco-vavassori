import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Marco</h1>
        <p className={styles.description}>
          Hi there! I'm Marco Vavassori, a recent graduate with a Bachelor of
          Engineering in Software Engineering. When I'm not
          coding, you can find me hitting the gym or shooting hoops on the
          basketball court to keep in shape. I love collaborating on cool
          projects and bringing ideas to life!
        </p>
        <a href="mailto:marcovava2001@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src="/assets/pp.png" className={styles.heroImg}></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
