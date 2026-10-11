import type { PageHeaderProps } from "./PageHeader.types";
import styles from "./PageHeader.module.css";

export function PageHeader({ label }: PageHeaderProps) {
    return (
        <header className={styles.title}>
            <p className={styles.label}>{ label }</p>
        </header>
    );
}