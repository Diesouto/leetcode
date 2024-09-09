function isPalindrome(s: string): boolean {
    s = s.toLowerCase().match(/[a-z0-9]/g)?.join("") || "";
    let reverse = s.split("").reverse().join("")

    return s === reverse
};