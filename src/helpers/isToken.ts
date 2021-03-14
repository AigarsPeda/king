export const isToken = (value: string): boolean => {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  ) {
    return false;
  } else {
    return true;
  }
};

// TODO: check if legit token from API
