import { Properties } from "../properties.model";

export const Sciences : Properties[] = [
    {
        question: 'In which country did the Internet start?', 
            options: [
                {option: 'USA', correct: true},
                {option: 'france', correct: false},
                {option: 'Britain', correct: false},
                {option: 'Nigeria', correct: false},
            ]
    },
    {
        question: 'What is the term used to denote the tendency of an object to remain in a state of rest until acted upon by an external force?', 
            options: [
                {option: 'inertia', correct: true},
                {option:  'Newton-first law', correct: false},
                {option: 'applied force', correct: false},
                {option: 'force of gravity', correct: false},
            ]
    },
    {
        question:'A bone is joined to a muscle by which structure?', 
            options: [
                {option:  'Impulse', correct: false},
                {option: 'Tissue', correct: false},
                {option: 'Tendon', correct: true},
                {option:  'ligaments', correct: false},
            ]
    },
    {
        question:  'Which company launched CDs in the early 1990s?', 
            options: [
                {option: 'Philips', correct: true},
                {option: 'vodacom', correct: false},
                {option: 'Kodak', correct: false},
                {option: ' IBM', correct: false},
            ]
    },
    {
        question: 'What is another name for a URL?', 
            options: [
                {option:  'VIP Address', correct: false},
                {option:  'Web page Address', correct: true},
                {option: 'protocol', correct: false},
                {option:  'Application programming interface', correct: false},
            ]
    }
];