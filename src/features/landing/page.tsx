import { SpinnerWheel } from "@components";

export function LandingPage() {
    return (
        <main className="page-landing">
            <header>
                <h1>Spinly</h1>
            </header>
            <section>
                <SpinnerWheel />
            </section>
        </main>
    );
}