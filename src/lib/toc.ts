export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function extractToc(raw: string): TocItem[] {
  const lines = raw.split('\n');
  const items: TocItem[] = [];
  const headingRegex = /^(#{2,3})\s+(.+)$/;

  for (const line of lines) {
    const match = line.trim().match(headingRegex);
    if (match) {
      const level = match[1].length === 2 ? 2 : 3;
      const text = match[2].replace(/\{[^}]*\}$/, '').trim();
      const id = text
        .toLowerCase()
        .replace(/\{[^}]*\}/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      items.push({ id, text, level });
    }
  }

  return items;
}
