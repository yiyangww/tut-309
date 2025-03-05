"use server";

export async function greetUser(name) {
  return `Hello, ${name}!`;
}

let count = 0; // server variable(only reset when u restart the server)

export async function incrementCounter() {
  count += 1;
  console.log("counter is updated, current value", count);
  return count;
}
