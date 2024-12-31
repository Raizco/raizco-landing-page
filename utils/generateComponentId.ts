type generateComponentIdType = {
    prefix?: string;
  };
  
  export function generateComponentId({
    prefix,
  }: generateComponentIdType = {}): string {
    return `${prefix || "element"}-${Math.random().toString(36).substring(2)}`;
  }
  