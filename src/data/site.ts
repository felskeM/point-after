export const site = {
  name: 'Point After Pub & Grille',
  tagline: 'Way More Than Just a Sports Bar!',
  address: '7101 S. 76th St. Franklin, WI 53132',
  phone: '414-425-0822',
  // Published on the restaurant's May 2026 main menu.
  email: 'info@pointafterpubandgrille.com',
  // Temporary destination explicitly provided by the site owner.
  contactEmail: 'mmayorf@outlook.com',
  mapsUrl: 'https://maps.google.com/?q=7101+S+76th+St+Franklin+WI+53132',
};

// Verified against the restaurant's existing website on September 28, 2026.
// Closing times are intentionally not inferred from online ordering hours.
export const hours = [
  { days: 'Monday–Friday', time: '11:00 AM–close' },
  { days: 'Saturday–Sunday', time: '10:30 AM–close' },
];
export const orderingHours = [
  { days: 'Monday–Thursday', time: '11:00 AM–9:00 PM' },
  { days: 'Friday', time: 'Online orders unavailable' },
  { days: 'Saturday–Sunday', time: '11:00 AM–9:00 PM' },
];

export const nav = [
  { label: 'Menu', href: '/#menu-new' },
  { label: 'Specials', href: '/#specials-new' },
  { label: 'Events', href: '/#events-new' },
  { label: 'Parties', href: '/#parties-new' },
  { label: 'Touchback', href: '/touchback-program/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/#contact-new' },
];

export const menuHighlights = [
  { title: 'Build Your Own', copy: 'Choose Angus beef, portabella mushroom, black bean, veggie burger, or an 8oz chicken breast.', price: '$15.95' },
  { title: 'Bone-In Wings', copy: 'Buffalo, BBQ, honey garlic, dry rub, or TKO with celery sticks and your choice of dip.', price: 'From $13.50' },
  { title: 'Point After Fish Fry', copy: 'Three pieces of haddock with fries, coleslaw, rye bread, and your choice of potato pancakes or seasoned fries.', price: '$18.95' },
  { title: 'Minor League Menu', copy: 'Mac & cheese, chicken tenders, grilled cheese, hamburger sliders, and cheeseburger sliders for the shorter crowd.', price: '$7.45' },
];

export const specials = [
  'Taco Tuesday at Point After',
  'Chicken or beef taco platter - $12.95',
  'Tuesday lunch taco platter - $7.95',
  'New wines now pouring - $11 glass / $32 bottle',
];
