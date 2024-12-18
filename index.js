export function factotial(n) {
    if (n < 0) return null;

    if (n === 0) {
        return 1;
    }
    
    return n * factotial(n - 1);
}