import {
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
  contactPreferenceTypes,
} from "./options";

const escortBasicFields = [
  {
    value: 'name',
    label: 'Name',
    required: true,
  },
  {
    value: 'age',
    label: 'Age',
    options: ages,
    required: true,
  },
  {
    value: 'nationality',
    label: 'Nationality',
    options: nationalities,
    required: true,
  },
  {
    value: 'height',
    label: 'Height',
    options: heights,
    required: true,
  },
  {
    value: 'weight',
    label: 'Weight',
    options: weights,
    required: true,
  },
  {
    value: 'bust',
    label: 'Bust',
    options: busts,
    required: true,
  },
  {
    value: 'bodySize',
    label: 'Body Size',
    options: bodySizes,
    required: true,
  },
  {
    value: 'personal',
    label: 'Personal',
    options: personalTypes,
    required: true,
  },
  {
    value: 'serviceType',
    label: 'Service Type',
    options: serviceTypes,
    required: true,
  },
  {
    value: 'workingStatus',
    label: 'Working Status',
    options: workingStatues,
    required: true,
  },
  {
    value: 'parking',
    label: 'Parking',
    options: parkingTypes,
    required: true,
  },
  {
    value: 'orientation',
    label: 'Orientations',
    options: orientations,
    required: false,
  }
];

const escortRatesFields = [
  {
    value: 'fullServiceSixty',
    label: 'Full Service[60mins]',
    required: true,
  },
  {
    value: 'fullServiceThirty',
    label: 'Ful Service[30mins]',
    required: true,
  },
  {
    value: 'sensualMessageSixty',
    label: 'Sensual Message[60mins]',
  },
  {
    value: 'sensualMessageThirty',
    label: 'Sensual Message[30mins]',
  },
  {
    value: 'outCalls',
    label: 'OutCalls[60mins]',
  },
  {
    value: 'overnight',
    label: 'Overnight',
  },
];

const workingHoursFields = [
  {
    options: timeOptions,
    value: 'mondayFrom',
    label: 'Monday',
  },
  {
    options: timeOptions,
    value: 'mondayEnd',
    label: 'To',
  },
  {
    options: timeOptions,
    value: 'tuesdayFrom',
    label: 'Tuesday',
  },
  {
    options: timeOptions,
    value: 'tuesdayEnd',
    label: 'To',
  },
  {
    options: timeOptions,
    value: 'wednesdayFrom',
    label: 'Wednesday',
  },
  {
    options: timeOptions,
    value: 'wednesdayEnd',
    label: 'To',
  },
  {
    options: timeOptions,
    value: 'thursdayFrom',
    label: 'Thursday',
  },
  {
    options: timeOptions,
    value: 'thursdayEnd',
    label: 'To',
  },
  {
    options: timeOptions,
    value: 'fridayFrom',
    label: 'Friday',
  },
  {
    options: timeOptions,
    value: 'fridayEnd',
    label: 'To',
  },
  {
    options: timeOptions,
    value: 'saturdayFrom',
    label: 'Saturday',
  },
  {
    options: timeOptions,
    value: 'saturdayEnd',
    label: 'To',
  },
  {
    options: timeOptions,
    value: 'sundayFrom',
    label: 'Sunday',
  },
  {
    options: timeOptions,
    value: 'sundayEnd',
    label: 'To',
  },
];

const contactFields = [
  {
    value: 'phone',
    label: 'Phone',
    required: true,
  },
  {
    value: 'email',
    label: 'Email',
  },
  {
    value: 'contactPreference',
    label: 'Contact Preference',
    options: contactPreferenceTypes
  }
];

const fields = {
  // Basic
  name: '',
  age: '',
  nationality: '',
  height: '',
  weight: '',
  bust: '',
  bodySize: '',
  personal: '',
  serviceType: '',
  workingStatus: '',
  parking: '',
  orientation: '',
  // Rates
  fullServiceSixty: '',
  fullServiceThirty: '',
  sensualMessageSixty: '',
  sensualMessageThirty: '',
  outCalls: '',
  overnight: '',
  // Extra services
  includedServices: [],
  excludedServices: [],
  // Working hours
  mondayFrom: '9am',
  mondayEnd: '1am',
  tuesdayFrom: '9am',
  tuesdayEnd: '1am',
  wednesdayFrom: '9am',
  wednesdayEnd: '1am',
  thursdayFrom: '9am',
  thursdayEnd: '1am',
  fridayFrom: '9am',
  fridayEnd: '1am',
  saturdayFrom: '9am',
  saturdayEnd: '1am',
  sundayFrom: '9am',
  sundayEnd: '1am',
  // Contact
  phone: '',
  email: '',
  contactPreference: '',
  // Location
  country: 'New Zealand',
  city: '',
  suburb: '',
  // Description & Media
  Description: '',
  coverImage: '',
  images: [],
};

export {
  fields,
  escortBasicFields,
  escortRatesFields,
  workingHoursFields,
  contactFields,
}
