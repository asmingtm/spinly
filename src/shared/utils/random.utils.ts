export interface HSLParam {
    set?: number;
    min?: number;
    max?: number;
}

export interface RandomHSLParams {
    h?: HSLParam;
    s?: HSLParam;
    l?: HSLParam;
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function resolveParam(
    param: HSLParam | undefined,
    defaultMin: number,
    defaultMax: number,
): number {
    if (param?.set !== undefined) {
        if (!Number.isFinite(param.set) || param.set < defaultMin || param.set > defaultMax) {
            throw new RangeError(`Value must be between ${defaultMin} and ${defaultMax}.`);
        }

        return param.set;
    }

    const min = param?.min ?? defaultMin;
    const max = param?.max ?? defaultMax;

    if (
        !Number.isFinite(min) ||
        !Number.isFinite(max) ||
        min < defaultMin ||
        max > defaultMax ||
        min > max
    ) {
        throw new RangeError(`Range must be between ${defaultMin} and ${defaultMax}, with min <= max.`);
    }

    return randomInt(min, max);
}

export function randomHSL({
    h,
    s,
    l,
}: RandomHSLParams = {}): string {
    const hue = resolveParam(h, 0, 360);
    const saturation = resolveParam(s, 0, 100);
    const lightness = resolveParam(l, 0, 100);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}