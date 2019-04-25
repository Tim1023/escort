/**
 *
 * @return [18,19,29...49,50]
 * @type {number[]}
 */
const ages = Array(50 - 17).fill(0).map((e, i) => i + 18);

const nationalities = [
  'African',
  'American',
  'Argentine',
  'Asian-Other',
  'Australian',
  'AU-European',
  'Bruneian',
  'Brazilian',
  'British',
  'Canadian',
  'Chinese',
  'Colombian',
  'Cook Islands',
  'Dutch',
  'English',
  'Filipino',
  'Fijian',
  'French',
  'German',
  'Greek',
  'Hawaiian',
  'Indian',
  'Indonesian',
  'Italian',
  'Jamaican',
  'Japanese',
  'Korean',
  'Latino',
  'Malaysian',
  'Middle Easter',
  'Mongolian',
  'NZ-European',
  'NZ-Part Maori',
  'Polynesian',
  'Russian',
  'Romania',
  'Samoan',
  'Singapore',
  'Spanish',
  'Sri Lankan',
  'Swedish',
  'Tahitian',
  'Taiwanese',
  'Thai',
  'Ukrainian',
  'Vietnamese',
  'Other',
];

/**
 *
 * @return [150cm,152cm,154cm...198cm,200cm]
 * @type {string[]}
 */
const heights = Array(Math.ceil((200 - 149)/2)).fill(0).map((e, i) => 2*i + 150 + 'cm');

/**
 * @return [40kg,41kg,42kg...89kg,90kg]
 * @type {string[]}
 */
const weights = Array(90 - 39).fill(0).map((e, i) => i + 40+'kg');
const busts = ['A','B','C','D','E','F','G','H'];

/**
 * @return [5,6,7..,24,25]
 * @type {number[]}
 */
const bodySizes = Array(25 - 4).fill(0).map((e, i) => i + 5);

const personalTypes = [
  'Natural',
  'Shaven',
  'Trimmed',
];

const serviceTypes = [
  'Full Service',
  'Full Service & BDSM',
];
const workingStatues = [
  'Private',
  'Agency',
];
const parkingTypes = [
  'Paid Parking',
  'Paid Parking & Street Parking',
  'Private Parking',
  'Private Parking & Street Parking',
  'Street Parking',
];
const orientations = [
  'Lesbian',
  'Transsexual',
  'Bisexual',
];
const timeOptions = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12am",
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "Midnight",
  "Late",
  "OFF",
  "Please ask",
];
const countries = ['New Zealand'];
const nzSuburbs = [
  'Auckland',
  'Northland',
  'Hamilton',
  'Central North Island',
  'Tauranga',
  'Wellington',
  'Christchurch',
  'South Island',
];
const extraServiceTypes = [
  'Anal sex',
  'BD - bondage+discipline',
  'Bachelor party',
  'Balls licking+sucking',
  'Bi double',
  'Body slide',
  'Bondage',
  'Breast play',
  'Brown shower',
  'CBT - cock and ball torture',
  'COB - cum on body',
  'COF - cum on face',
  'Costumes and role play',
  'Couples',
  'Cuddling',
  'Deep throat',
  'Dinner dates',
  'Dirty talk',
  'Disabled clients',
  'Double penetration',
  'Erotic sensual massage',
  'Fetishes',
  'Filming',
  'Fire and ice - hot and cold BJ',
  'Foot fetish',
  'French kissing',
  'GFE',
  'Gives canings',
  'Gives golden shower',
  'Gives oral',
  'Hand relief',
  'Lactating',
  'Light kissing',
  'Light spanking',
  'Multi shots',
  'Mutual masturbation',
  'Mutual oral',
  'Oil body slide',
  'Oil massage',
  'PSE - porn star experience',
  'Prostate massage',
  'Receives canings',
  'Receives golden showers',
  'Receives oral',
  'Sexy lingerie and stocking',
  'Shower together',
  'Squirting',
  'Straight double',
  'Strap on',
  'Strip tease',
  'Touching',
  'Toys on me',
  'Toys on you',
  'Variety of positions',
  'Please Ask',
];

export {
  ages,
  nationalities,
  heights,
  weights,
  busts,
  bodySizes,
  personalTypes,
  serviceTypes,
  workingStatues,
  parkingTypes,
  orientations,
  timeOptions,
  countries,
  nzSuburbs,
  extraServiceTypes,
}
