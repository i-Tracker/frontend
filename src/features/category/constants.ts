export const categoryMap = {
  macbook_air: 'Macbook Air',
  macbook_pro: 'Macbook Pro',
  i_phone: 'iPhone',
  mac: 'Mac',
  air_pods: 'AirPods',
  apple_watch: 'Watch',
  i_pad: 'iPad',
} as const;

export type categoryType = keyof typeof categoryMap;

export const categoryValues = Object.values(categoryMap);
