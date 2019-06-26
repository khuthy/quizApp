import { Properties } from "../properties.model";

export const Animals : Properties[] = [
    {
        question: 'ANC, the largest political party in South Africa. What does ANC stand for?', 
            options: [
                {option: 'African National Commission', correct: false},
                {option: 'African National Congress', correct: true},
                {option: 'Africa\'s New Coalition', correct: false},
                {option: 'Afrikaner National Coalition', correct: false},
            ]
    },
    {
        question: 'Black Consciousness Movement. Which leader of the Black Consciousness Movement in South Africa was killed in police custody in 1977?', 
            options: [
                {option:  'Oliver Badebe', correct: false},
                {option: 'Sipho Bengali', correct: false},
                {option: 'Steve Biko', correct: true},
                {option: 'Walter Boipeteng', correct: false},
            ]
    },
    {
        question: 'Government. What type of government does South Africa have?', 
            options: [
                {option:  'Dictatorship', correct: false},
                {option: 'Confederation', correct: false},
                {option: 'Republic', correct: true},
                {option:  'Federal Republic', correct: false},
            ]
    },
    {
        question: 'Which K is the town where the Freedom Charter was adopted by the ANC in 1955?', 
            options: [
                {option:  'Krugersdorp', correct: false},
                {option: 'Kliptown', correct: false},
                {option: 'Kimberley', correct: true},
                {option:  'Kraaifontein', correct: false},
            ]
    },
    {
        question: 'How many years  had nelson mandela been in prison?', 
            options: [
                {option:  '9 Years', correct: false},
                {option:  '28 Years', correct: false},
                {option: '27 Years', correct: true},
                {option:  '26 Years', correct: false},
            ]
    }
];