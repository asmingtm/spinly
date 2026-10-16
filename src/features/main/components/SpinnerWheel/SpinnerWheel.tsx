import { use } from "react";
import { OptionsContext } from "@contexts";
import type { OptionObject } from "@types";
import type { WheelSlice } from "./SpinnerWheel.types";
import styles from "./SpinnerWheel.module.css";

const CENTER = 50;
const RADIUS = 50;
const LABEL_RADIUS = 32;
const MAX_LABEL_LENGTH = 14;

function polar(radius: number, angle: number): [number, number] {
    const rad = ((angle - 90) * Math.PI) / 180;
    return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)];
}

function slicePath(start: number, end: number): string {
    const [x1, y1] = polar(RADIUS, start);
    const [x2, y2] = polar(RADIUS, end);
    const large = end - start > 180 ? 1 : 0;
    return `M ${CENTER} ${CENTER} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${large} 1 ${x2} ${y2} Z`;
}

function truncate(text: string): string {
    return text.length > MAX_LABEL_LENGTH ? `${text.slice(0, MAX_LABEL_LENGTH - 1)}…` : text;
}

function buildSlices(options: OptionObject[]): WheelSlice[] {
    const total = options.reduce((sum, opt) => sum + Math.max(opt.weight, 0), 0);
    if (total <= 0) return [];

    let cursor = 0;

    return options.map((opt, index) => {
        const weight = Math.max(opt.weight, 0);
        const sweep = (weight / total) * 360;
        const start = cursor;
        const end = cursor + sweep;
        const mid = start + sweep / 2;
        cursor = end;

        const [textX, textY] = polar(LABEL_RADIUS, mid);

        return {
            key: `${index}-${opt.content}-${opt.color}-${opt.weight}`,
            color: opt.color,
            label: truncate(opt.content),
            path: options.length === 1 ? null : slicePath(start, end),
            textX,
            textY,
            textAngle: mid - 90,
        };
    });
}

export function SpinnerWheel() {
    const { options } = use(OptionsContext);
    const slices = buildSlices(options);

    return (
        <section className={styles.wheel}>
            <svg viewBox="0 0 100 100" className={styles.svg} role="img" aria-label="Spinner wheel">
                <g className={styles.disc}>
                    {slices.length === 1 && (
                        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill={slices[0].color} />
                    )}
                    {slices.map((slice) => (
                        <g key={slice.key}>
                            {slice.path && (
                                <path d={slice.path} fill={slice.color} stroke="var(--clr-solid)" strokeWidth={0.5} />
                            )}
                            <text
                                x={slice.textX}
                                y={slice.textY}
                                className={styles.label}
                                transform={`rotate(${slice.textAngle} ${slice.textX} ${slice.textY})`}
                            >
                                {slice.label}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </section>
    );
}