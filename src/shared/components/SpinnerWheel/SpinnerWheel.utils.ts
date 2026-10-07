export function polarToCartesian(
    cx: number,
    cy: number,
    radius: number,
    angle: number,
) {
    const radians = (angle * Math.PI) / 180;

    return {
        x: cx + radius * Math.cos(radians),
        y: cy + radius * Math.sin(radians),
    };
}