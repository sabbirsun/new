function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } 
  else if (typeof value === "number") {
    return value * 10;
  } 
  else if (typeof value === "boolean") {
    return !value;
  }

  // fallback (optional, not really needed)
  return value;
}

console.log(formatValue("hello")); // HELLO
console.log(formatValue(5));       // 50
console.log(formatValue(true));    // false
