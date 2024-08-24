export const FB_PIXEL_ID = 294598350342835;

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
