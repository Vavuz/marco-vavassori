import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }: any) => {
  const skillCount = project.skills.length;
  const idealSkillCount = 5;
  const scaleFactor =
    skillCount > idealSkillCount ? (idealSkillCount / skillCount) * 0.7 : 1;

  const skillStyle = {
    fontSize: `${Math.max(10, 25 * scaleFactor)}px`,
    padding: `${Math.max(2, 5 * scaleFactor)}px ${Math.max(8, 22 * scaleFactor)}px`
  };

  return (
    <div className={styles.container}>
      <img
        src={"/marco-vavassori/assets/" + project.imageSrc}
        className={styles.image}
        alt={project.title}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill: string, id: any) => (
          <li key={id} className={styles.skill} style={skillStyle}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <div
          className={`${styles.linkWrapper} ${
            project.demo.length === 0 ? styles.disabled : ""
          }`}
        >
          <a
            href={project.demo.length === 0 ? undefined : project.demo}
            target={project.demo.length === 0 ? undefined : "_blank"}
            className={`${styles.link} ${
              project.demo.length === 0 ? styles.pointerEventsNone : ""
            }`}
            onClick={(e) => project.demo.length === 0 && e.preventDefault()}
          >
            Demo
          </a>
        </div>
        <div
          className={`${styles.linkWrapper} ${
            project.source.length === 0 ? styles.disabled : ""
          }`}
        >
          <a
            href={project.source.length === 0 ? undefined : project.source}
            target={project.source.length === 0 ? undefined : "_blank"}
            className={`${styles.link} ${
              project.source.length === 0 ? styles.pointerEventsNone : ""
            }`}
            onClick={(e) => project.source.length === 0 && e.preventDefault()}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
