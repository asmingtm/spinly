import { use } from "react";
import { OptionsContext } from "@contexts";
import { MdDragIndicator, MdDelete } from "react-icons/md";
import styles from "./InputSection.module.css";

export function InputSection() {
    const {options} = use(OptionsContext);

    return (
        <ul className={styles.list}>
            <p className={styles.title}>Options</p>
            {
                options.map((opt, index) => (
                    <li key={crypto.randomUUID()} className={styles.item}>
                        <button className={styles.drag}>
                            <MdDragIndicator />
                        </button>
                        <span className={styles.color}>
                            <i className={styles.chip} style={{background: opt.color}}>{index + 1}</i>
                        </span> 
                        <input type="text" value={opt.content} className={styles.content} />
                        <button className={styles.delete}>
                            <MdDelete />
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}