import { SpinnerWheel } from "@components";
import "./page.css";

export function MainPage() {
    return (
        <main className="page-main">
            <header>SPINLY</header>
            <section>
                <SpinnerWheel />
            </section>
        </main>
    );
}