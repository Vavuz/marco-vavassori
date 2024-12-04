import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <h1>I'd love to hear from you!</h1>
        <a href="mailto:marcovava2001@gmail.com" target="_blank">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            className={styles.image}
          ></img>
        </a>
        <a href="https://github.com/Vavuz" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className={styles.image}
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/marco-vavassori-3b321a1b6/"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            className={styles.image}
          ></img>
        </a>
        <a
          href="https://www.instagram.com/_marcovavassori_/?hl=it"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            className={styles.image}
          ></img>
        </a>
        <a
          href="https://discordapp.com/users/294586068802600973"
          target="_blank"
        >
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png"
            className={styles.image}
          ></img>
        </a>
      </div>
      <p>@2024 Marco Vavassori. All rights reserved.</p>
    </section>
  );
};

export default Contact;
