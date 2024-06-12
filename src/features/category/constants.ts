export const categoryMap = {
  macbook_air: 'MacBook Air',
  macbook_pro: 'MacBook Pro',
  i_phone: 'iPhone',
  mac: 'Mac',
  airpods: 'AirPods',
  apple_watch: 'Watch',
  i_pad: 'iPad',
  airpods_max: 'Airpods Max',
  airpods_pro: 'Airpods Pro',
} as const;

export type CategoryType = keyof typeof categoryMap;

export const categoryValues = Object.values(categoryMap);

export type CategoryName = keyof typeof categoryValues;
