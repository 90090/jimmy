// Shared business info — change it once here and the navbar, footer, contact page and SEO tags all update.
export const site = {
  name: "Jimmy's of Watertown",
  tagline: 'All American Grill',
  description:
    "Family-owned All American Grill serving fresh, hot, house-made breakfast and lunch in Watertown, CT for over 20 years. Parties of up to 20 welcome.",
  url: 'https://jimmysofwatertown.com',
  phone: '(860) 274-3223',
  phoneHref: 'tel:+18602743223',
  phoneE164: '+1-860-274-3223',
  email: 'Jimmysofwatertown@yahoo.com',
  address: { street: '1067 Main Street', city: 'Watertown', state: 'CT', zip: '06795' },
  geo: { latitude: 41.595322, longitude: -73.111287 },
  // Shown on the site (footer + contact page)
  hours: [
    { days: 'Mon–Sat', time: '5:30am – 2pm' },
    { days: 'Sunday', time: '5:30am – 12:30pm' },
  ],
  // Same hours in 24h format for Google's structured data — keep in sync with `hours` above
  hoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '05:30', closes: '14:00' },
    { days: ['Sunday'], opens: '05:30', closes: '12:30' },
  ],
  social: {
    facebook: 'https://www.facebook.com/jimmysofwatertown/',
    instagram: 'https://www.instagram.com/jimmysofwatertownct/',
  },
  giftCards: 'https://squareup.com/gift/RJ1JNDFE2E7DJ/order',
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11935.179154142112!2d-73.111287!3d41.595322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7eac7c33ffc4f%3A0xeb131ab759df1630!2sJimmy's%20of%20Watertown!5e0!3m2!1sen!2sus!4v1717713644597!5m2!1sen!2sus",
  checkoutEndpoint: 'https://l6wkux1rph.execute-api.us-east-1.amazonaws.com/checkout',
};