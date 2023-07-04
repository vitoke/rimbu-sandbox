function normalize(value: any): string {
  if (Array.isArray(value)) {
    return `[${String(value.map(normalize))}]`;
  }
  if (
    typeof value === "object" &&
    value?.constructor ===
      Object.prototype.constructor
  ) {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
}

export function log(obj: Record<string, any>) {
  for (const name in obj) {
    const value = normalize(obj[name]);

    console.log(name, "->", value);
  }
}

export function subject(title: string) {
  console.clear();
  console.info(`-- ${title} --`);
}
