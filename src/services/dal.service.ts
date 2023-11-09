

export async function getCollection<T>(resource: string): Promise<{results: T[]}> {
   return await fetch(`https://swapi.dev/api/${resource}`).then(res => res.json());
} 