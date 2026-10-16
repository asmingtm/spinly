import { use } from "react";
import { OptionsContext } from "@contexts";
import { MdDragIndicator, MdDelete, MdAdd, MdEdit } from "react-icons/md";
import styles from "./InputSection.module.css";

export function InputSection() {
    const { options, setOptions } = use(OptionsContext);

    function updateContent(id: string, content: string) {
        setOptions((prev) => prev.map((opt) => (opt.id === id ? { ...opt, content } : opt)));
    }

    function removeOption(id: string) {
        setOptions((prev) => prev.filter((opt) => opt.id !== id));
    }
    function addOption(){
        return;
    }
    function openOptionEditor(id: string){
        return id;
    }

    return (
        <ul className={styles.list}>
            <p className={styles.title}>Options</p>
            {
                options.map((opt, index) => (
                    <li key={opt.id} className={styles.item}>
                        <button className={styles.drag}>
                            <MdDragIndicator />
                        </button>
                        <span className={styles.color}>
                            <i className={styles.chip} style={{background: opt.color}}>{index + 1}</i>
                        </span>
                        <input
                            type="text"
                            value={opt.content}
                            className={styles.content}
                            onChange={(e) => updateContent(opt.id, e.target.value)}
                        />
                        <button
                            className={styles.edit}
                            aria-label={`Delete option ${index + 1}`}
                            onClick={() => openOptionEditor(opt.id)}
                        >
                            <MdEdit />
                        </button>
                        <button
                            className={styles.delete}
                            aria-label={`Delete option ${index + 1}`}
                            onClick={() => removeOption(opt.id)}
                        >
                            <MdDelete />
                        </button>
                    </li>
                ))
            }
            <li className={styles.item}>
                <input type="text" value="Add new" className={styles.content} readOnly />
                <button
                    className={styles.add}
                    aria-label="Add a new option"
                    onClick={() => addOption()}
                >
                    <MdAdd />
                </button>
            </li>
        </ul>
    );
}