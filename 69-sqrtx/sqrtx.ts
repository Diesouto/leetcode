function mySqrt(x: number): number {
    let root = 0;
    let nextRoot = root + 1

    while (nextRoot * nextRoot <= x) {
        root++
        nextRoot = root + 1
    }

    return root
};