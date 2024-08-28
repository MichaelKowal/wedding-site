export interface HMItem {
  name: string;
  subtitle: string;
  icon: string;
  description?: string;
  imagePrefix: string;
  imageCount?: number;
  dates?: string;
}

export function isHMItem(item: unknown): item is HMItem {
  if (
    (item as HMItem).name &&
    (item as HMItem).icon &&
    (item as HMItem).imagePrefix
  ) {
    return true;
  }
  return false;
}

export function isHMItems(items: unknown): items is HMItem[] {
  for (const item of items as HMItem[]) {
    if (!isHMItem(item)) {
      return false;
    }
  }
  return true;
}
