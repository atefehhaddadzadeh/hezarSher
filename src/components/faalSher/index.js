import styles from "./faalSher.module.css"
function FaalSher(props){
    const { title, poem } = props;

    return (
        <div className={styles.poemContainer}>
                    <p className={styles.title}>{title}:</p>
                    <div className={styles.poem}>
                        {poem.map((couplet, coupletIndex) => {
                            return (
                                <div
                                    key={`couplet-${coupletIndex}`}
                                    className={styles.couplet}
                                >
                                    {couplet.map((verse, verseIndex) => {
                                        return (
                                            <div
                                                key={`verse-${coupletIndex}-${verseIndex}`}
                                                className={styles.verse}
                                            >
                                                {verse}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>{" "}
        </div>
    )
}
export default FaalSher;