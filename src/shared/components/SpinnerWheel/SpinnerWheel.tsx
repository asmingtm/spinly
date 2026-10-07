import { useState } from "react";
import { polarToCartesian } from "./SpinnerWheel.utils";
import { randomColor } from "@utils";

import "./SpinnerWheel.css";

const content = ["opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt", "opt"];

export function SpinnerWheel() {
    const [rotation, setRotation] = useState(0);

    const segmentAngle = 360 / content.length;

    function spin() {
        const winner = Math.floor(Math.random() * content.length);

        const target =
            360 * 5 +
            (360 - winner * segmentAngle - segmentAngle / 2);

        setRotation((current) => current + target);
    }

    return (
        <div className="spinner">
            <div className="spinner__pointer">

            </div>

            <svg
                className="spinner__wheel"
                viewBox="0 0 100 100"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {content.map((item, index) => {
                    const startAngle = index * segmentAngle - 90;
                    const endAngle = startAngle + segmentAngle;
                    const labelAngle = startAngle + segmentAngle / 2;

                    const start = polarToCartesian(
                        50,
                        50,
                        50,
                        endAngle,
                    );

                    const end = polarToCartesian(
                        50,
                        50,
                        50,
                        startAngle,
                    );

                    const label = polarToCartesian(
                        50,
                        50,
                        32,
                        labelAngle,
                    );

                    return (
                        <g key={item}>
                            <path
                                className="spinner__segment"
                                d={`
                                    M 50 50
                                    L ${start.x} ${start.y}
                                    A 50 50 0 0 0 ${end.x} ${end.y}
                                    Z
                                `}
                                style={{ fill: randomColor() }}
                            />

                            <text
                                x={label.x}
                                y={label.y}
                                className="spinner__label"
                                transform={`
                                    rotate(
                                        ${labelAngle}
                                        ${label.x}
                                        ${label.y}
                                    )
                                `}
                            >
                                {item}
                            </text>
                        </g>
                    );
                })}
            </svg>

            <button onClick={spin}>Spin</button>
        </div>
    );
}