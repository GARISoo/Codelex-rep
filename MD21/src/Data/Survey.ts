export type SurveyDataType = {
    id: number,
    question?: string,
    answer?: any,
    isActive: boolean,
}

export const SurveyData = [
  {
    id: 1,
    question: 'Please provide your full name',
    answer: '',
    isActive: true,
  },
  {
    id: 2,
    question: 'Select your age group',
    answer: '',
    isActive: false,
  },
  {
    id: 3,
    question: 'Employment status',
    answer: '',
    isActive: false,
  },
  {
    id: 4,
    question: 'Purpose of the requested loan?',
    answer: '',
    isActive: false,
  },
  {
    id: 5,
    question: 'Please provide additional information about your dog',
    answer: '',
    isActive: false,
  },
  {
    id: 6,
    question: 'Submit these answers?',
    answer: '',
    isActive: false,
  },
];
