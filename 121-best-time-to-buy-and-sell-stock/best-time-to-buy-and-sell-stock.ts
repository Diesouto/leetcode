function maxProfit(prices: number[]): number {
    let minValue = Infinity;
    let maxPoints = 0;

    for (let p of prices) {
        if(p < minValue) {
            minValue = p;
            continue;
        }

        if((p - minValue) > maxPoints) {
            maxPoints = p - minValue;
        }
    }

    return maxPoints;
};