import styles from "./styles.module.css";

interface contentBlock {
  heading?: string;
  content?: string;
}

const ContentBlock = ({ heading, content }: contentBlock) => {
  return (
    <main className={styles.content}>
      {heading && <h1 className={styles.heading}>{heading}</h1>}
      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    </main>
  );
};

export default ContentBlock;
