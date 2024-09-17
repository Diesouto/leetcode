function plusOne(digits: number[]): number[] {
    // Join the digits into a string, then parse it as a BigInt to avoid overflow for large numbers
    let parsedNumber = BigInt(digits.join(""));
    
    // Add 1 to the parsed number
    parsedNumber = parsedNumber + BigInt(1);
    
    // Convert the number back to a string, then split it into an array of digits and map to numbers
    return parsedNumber.toString().split("").map(Number);
}
