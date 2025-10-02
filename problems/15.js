function binomial(n, k) {
    n = BigInt(n);
    k = BigInt(k);
    if (k > n - k) k = n - k; // optimisation

    let res = 1n;
    for (let i = 1n; i <= k; i++) {
        res = res * (n - k + i) / i;
    }
    return res;
}

const n = 20;
console.log(binomial(2 * n, n).toString()); // 137846528820
