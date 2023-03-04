export const fibonacci = (n: number): number[] => {
    const result: number[] = [1, 1];

    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}