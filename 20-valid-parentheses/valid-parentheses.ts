function isValid(s: string): boolean {
    const parenthesesMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const openingParenthesesStack = []

    for (let parentheses of s) {
        if (['(','{','['].includes(parentheses)) {
            openingParenthesesStack.push(parentheses)
        } else if (parenthesesMap[parentheses] !== openingParenthesesStack.pop()) {
            return false
        }
    }

    return openingParenthesesStack.length === 0
};