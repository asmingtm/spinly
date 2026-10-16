import { MdCasino } from "react-icons/md";
import styles from "./OptionEditorModal.module.css";

const optionColors: string[] = ["red", "blue", "green", "yellow"];

export function OptionEditorModal() {
    return (
        <section className={styles.modal}>
            <div className={styles.block}>
                <header>
                    New option/Edit Option
                </header>
                <fieldset>
                    <label className={styles.field} htmlFor="option-label">
                        <p className={styles.label}>Message</p>
                        <input id="option-label" type="text" placeholder="Your option.." value="Example" name="option" />
                    </label>
                    <label className={styles.field} htmlFor="option-weight">
                        <p className={styles.label}>Weight</p>
                        <input id="option-weight" type="number" placeholder="Option's weight" value={1} name="option" />
                    </label>
                    <div>
                        <label htmlFor="option-color-random">
                            <input type="radio" name="option-color" id="option-color-random" />
                            <MdCasino />
                        </label>
                        {
                            optionColors.map((color, index) => (
                                <label key={color} htmlFor={`option-color-${index}`}>
                                    <input type="radio" name="option-color" id={`option-color-${index}`} />
                                    <span className="chip" style={{background: `var(--clr-${color})`}} />
                                </label>
                            ))
                        }
                        <label htmlFor="option-color-custom">
                            <input type="color" name="option-color" id="option-color-custom" />
                            <span className="chip radial-gradient" />
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <button className="btn btn-solid" name="option">
                        Cancel
                    </button>
                    <button className="btn btn-primary" name="option">
                        Add/Edit
                    </button>
                </fieldset>
            </div>
        </section>
    );
}