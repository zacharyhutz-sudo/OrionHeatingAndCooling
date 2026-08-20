export const site = {
  name: 'Orion Heating & Cooling',
  shortName: 'Orion',
  phoneDisplay: '(706) 521-9277',
  phoneHref: '+17065219277',
  email: 'orionheatingandcoolingllc@gmail.com',
  serviceArea: 'Oconee County & surrounding areas',
  facebook: 'https://www.facebook.com/people/Orion-Heating-Cooling/61572976589696/',
  formsparkAction: 'https://submit-form.com/xsWZTXufj'
};

export const withBase = (path = '') => {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const clean = String(path).replace(/^\/+/, '');
  return `${base}${clean}`;
};

export const nav = [
  { href: '', label: 'Home' },
  { href: 'services', label: 'Services' },
  { href: 'about', label: 'About & Reviews' },
  { href: 'contact', label: 'Contact' }
];

export const services = [
  {
    eyebrow: 'Cooling',
    title: 'Cooling service & repair.',
    icon: 'cool',
    anchor: 'cooling',
    brandIcon: 'images/services/orion-cooling.png',
    description: 'Air-conditioning diagnostics, repairs, replacement, installation and maintenance with attention to airflow, humidity and system performance.',
    problems: ['AC runs constantly but does not cool', 'High summer energy bills', 'Poor airflow or humidity issues', 'Frequent cooling-system breakdowns']
  },
  {
    eyebrow: 'Heating',
    title: 'Heating service & repair.',
    icon: 'heat',
    anchor: 'heating',
    brandIcon: 'images/services/orion-heating.png',
    description: 'Heating diagnostics, repairs, system replacement, installation and preventative maintenance focused on dependable comfort and long-term efficiency.',
    problems: ['Uneven heating or cold spots', 'High winter energy bills', 'Frequent breakdowns', 'Aging systems struggling to keep up']
  },
  {
    eyebrow: 'Energy',
    title: 'Home energy solutions.',
    icon: 'energy',
    anchor: 'energy',
    brandIcon: 'images/services/orion-energy.png',
    description: 'Whole-home energy assessments that look beyond the equipment to help identify air leakage, insulation, duct and performance issues that can drive high utility bills.',
    problems: ['Rising utility bills', 'HVAC constantly cycling', 'Rooms that never stay comfortable', 'Older systems wasting energy']
  }
];

export const publicReviewSummaries = [
  {
    name: 'Angela Taylor',
    label: 'Google review',
    quote: 'Booking was simple. Jeremiah was on time, kept me aware during every step. He took care of my air conditioner in an honest and upfront way. I am a customer for life.'
  },
  {
    name: 'Tracy Reynolds',
    label: 'Google review',
    quote: 'Jeremiah Jordan is simply the best. Humble, straight shooting, effective, efficient, and extremely kind. I wholeheartedly recommend Orion for your service needs!'
  },
  {
    name: 'Bill Emerson',
    label: 'Google review',
    quote: 'The job was done when promised and was billed according to the estimate we had received. I would trust Jeremiah & Orion Home Services with any project I may have.'
  },
  {
    name: 'Wyatt Smith',
    label: 'Google review',
    quote: 'Jeremiah and his team do phenomenal work. I would highly recommend Orion home services to anybody needing any kind of home service. Anything from bathroom remodels to additions, Jeremiah should be your first pick.'
  },
  {
    name: 'Laura Bayne',
    label: 'Google review',
    quote: 'Jeremiah was an incredible help when our dryer was having issues. He came out and generously offered to remove a grate we were concerned was the issue for free and offered to send a quote for a new vent location.'
  },
  {
    name: 'Connie Tucker',
    label: 'Google review',
    quote: 'Highly Recommend! Orion Heating & Cooling provided excellent service from start to finish.'
  },
  {
    name: 'Ashleigh Woodruff',
    label: 'Google review',
    quote: 'I recently had an excellent experience with Orion, owned by Jeremiah Jordan. When my upstairs air conditioning went out, he and his team quickly diagnosed the issue and replaced the unit within two days.'
  },
  {
    name: 'Trey Thompson',
    label: 'Google review',
    quote: 'Great work and service!'
  }
];
