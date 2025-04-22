function isValid(s: string): boolean {
    const mapValues = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let compareStack = []

    for(let c of s) {
        if(mapValues[c]) {
            compareStack.push(c)
        }
        else {
            let last = compareStack.pop();
            if (mapValues[last] !== c) return false;
        }
    }
    
    return compareStack.length === 0;
};