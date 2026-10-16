import { MdSettings } from "react-icons/md";
import styles from "./ActionsSection.module.css";

export function ActionsSection() {
    return (
        <section className={styles.actions}>
            <button className="btn btn-solid">
                <MdSettings />
            </button>
            <button className="btn btn-primary">
                Spin
            </button>
        </section>
    );
}