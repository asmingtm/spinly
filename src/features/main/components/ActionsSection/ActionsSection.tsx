import styles from "./ActionsSection.module.css"

export function ActionsSection() {
    return (
        <section className={styles.actions}>
            <button className="btn btn-solid">
                History
            </button>
            <button className="btn btn-primary">
                Spin
            </button>
        </section>
    );
}