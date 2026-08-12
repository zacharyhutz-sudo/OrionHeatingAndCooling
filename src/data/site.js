export const site = {
  name: 'Orion Heating & Cooling',
  shortName: 'Orion',
  phoneDisplay: '(706) 521-2995',
  phoneHref: '+17065212995',
  email: 'orionheatingandcoolingllc@gmail.com',
  serviceArea: 'Oconee County & surrounding areas',
  facebook: 'https://www.facebook.com/people/Orion-Heating-Cooling/61572976589696/',
  formsparkAction: 'https://submit-form.com/YOUR_FORMSPARK_ID'
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
    eyebrow: 'Heating',
    title: 'Heating service & repair.',
    icon: 'heat',
    description: 'Heating diagnostics, repairs, system replacement, installation and preventative maintenance focused on dependable comfort and long-term efficiency.',
    problems: ['Uneven heating or cold spots', 'High winter energy bills', 'Frequent breakdowns', 'Aging systems struggling to keep up']
  },
  {
    eyebrow: 'Cooling',
    title: 'Cooling service & repair.',
    icon: 'cool',
    description: 'Air-conditioning diagnostics, repairs, replacement, installation and maintenance with attention to airflow, humidity and system performance.',
    problems: ['AC runs constantly but does not cool', 'High summer energy bills', 'Poor airflow or humidity issues', 'Frequent cooling-system breakdowns']
  },
  {
    eyebrow: 'Energy',
    title: 'Home energy solutions.',
    icon: 'energy',
    description: 'Whole-home energy assessments that look beyond the equipment to help identify air leakage, insulation, duct and performance issues that can drive high utility bills.',
    problems: ['Rising utility bills', 'HVAC constantly cycling', 'Rooms that never stay comfortable', 'Older systems wasting energy']
  }
];

export const publicReviewSummaries = [
  {
    name: 'Angela T.',
    label: 'Public review summary',
    quote: 'Described the A/C service as honest and straightforward, with clear communication throughout the visit.'
  },
  {
    name: 'Local customers',
    label: 'Public review theme',
    quote: 'Customer feedback repeatedly highlights responsive communication, clear pricing and work completed as quoted.'
  },
  {
    name: 'Public review profile',
    label: '5.0 rating · 6 reviews',
    quote: 'All six reviews on the public profile are five-star reviews, with several customers specifically mentioning Jeremiah.'
  }
];
