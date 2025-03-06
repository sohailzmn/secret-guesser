export interface Question {
  id: string;
  text: string;
  type: 'casual' | 'personal' | 'deep';
  options?: string[];
  weight: number;
}

export const questions: Question[] = [
  // Casual Questions
  {
    id: 'color',
    text: "What's your favorite color?",
    type: 'casual',
    options: ['Blue', 'Red', 'Green', 'Purple', 'Yellow', 'Black', 'White', 'Other'],
    weight: 1,
  },
  {
    id: 'pet',
    text: "Do you prefer cats or dogs?",
    type: 'casual',
    options: ['Cats', 'Dogs', 'Both', 'Neither'],
    weight: 1,
  },
  {
    id: 'childhood_dream',
    text: "What was your childhood dream job?",
    type: 'casual',
    options: ['Doctor', 'Astronaut', 'Teacher', 'Artist', 'Athlete', 'Scientist', 'Other'],
    weight: 2,
  },
  {
    id: 'comfort_food',
    text: "What's your go-to comfort food?",
    type: 'casual',
    options: ['Pizza', 'Ice Cream', 'Chocolate', 'Pasta', 'Burgers', 'Something homemade', 'Other'],
    weight: 2,
  },
  {
    id: 'vacation',
    text: "What's your ideal vacation?",
    type: 'casual',
    options: ['Beach', 'Mountains', 'City exploration', 'Staying home', 'Adventure sports', 'Other'],
    weight: 2,
  },
  
  // More Personal Questions
  {
    id: 'lie',
    text: "Have you ever lied about something important?",
    type: 'personal',
    options: ['Yes, and I regret it', 'Yes, but it was necessary', 'No, never about anything important', 'I prefer not to say'],
    weight: 3,
  },
  {
    id: 'erase_moment',
    text: "If you could erase one moment from your past, would you?",
    type: 'personal',
    options: ['Yes, definitely', 'Maybe one specific thing', 'No, my mistakes made me who I am', 'I prefer not to say'],
    weight: 3,
  },
  {
    id: 'understood',
    text: "Do you think people truly understand you?",
    type: 'personal',
    options: ['Yes, most people do', 'Only a few close people', 'No one really does', 'I don\'t let people get that close'],
    weight: 4,
  },
  {
    id: 'social_media',
    text: "How do you feel about your social media presence?",
    type: 'personal',
    options: ['It reflects the real me', 'It\'s a curated version of me', 'It\'s completely different from who I am', 'I don\'t use social media'],
    weight: 3,
  },
  {
    id: 'alone_time',
    text: "How much alone time do you need to feel balanced?",
    type: 'personal',
    options: ['Very little', 'A moderate amount', 'A lot', 'I prefer being alone most of the time'],
    weight: 2,
  },
  
  // Deep Questions
  {
    id: 'biggest_fear',
    text: "What's your biggest fear that you don't talk about?",
    type: 'deep',
    options: ['Failure', 'Rejection', 'Being alone', 'Death', 'Something else', 'I prefer not to say'],
    weight: 5,
  },
  {
    id: 'secret_talent',
    text: "Do you have a talent or skill that most people don't know about?",
    type: 'deep',
    options: ['Yes, and it\'s unusual', 'Yes, but it\'s nothing special', 'No, people know all my talents', 'I don\'t think I have any special talents'],
    weight: 4,
  },
  {
    id: 'different_life',
    text: "If you could live a completely different life, what would it look like?",
    type: 'deep',
    options: ['Similar to now but with small changes', 'Completely different career/location', 'Radically different in every way', 'I wouldn\'t change anything'],
    weight: 4,
  },
  {
    id: 'guilty_pleasure',
    text: "What's a guilty pleasure you enjoy but don't admit to others?",
    type: 'deep',
    options: ['A TV show/movie genre', 'A type of music', 'A food/drink', 'A hobby or activity', 'Something else', 'I prefer not to say'],
    weight: 4,
  },
  {
    id: 'regret',
    text: "What's your biggest regret in life so far?",
    type: 'deep',
    options: ['A career choice', 'A relationship decision', 'Not taking a risk', 'Something I did', 'Something I didn\'t do', 'I prefer not to say'],
    weight: 5,
  },
];

export const secretGuesses = [
  "You still feel guilty about something that happened in your past that you've never fully addressed.",
  "You have a creative talent that you've hidden from most people because you're afraid of judgment.",
  "You sometimes create a persona that doesn't reflect your true self to fit in with others.",
  "You have a secret obsession or collection that you tell almost no one about.",
  "You once did something questionable or against your values and have kept it hidden.",
  "You had a childhood crush on a fictional character that still influences your preferences today.",
  "You've fantasized about completely changing your life and starting over somewhere new.",
  "You have a fear of being truly known by others, so you keep parts of yourself hidden.",
  "You sometimes feel like an impostor in your own life, as if you're just pretending to be who you are.",
  "You have a secret dream or ambition that you've never pursued out of fear of failure.",
  "You've kept a meaningful relationship secret from friends or family.",
  "You have strong opinions or beliefs that you hide because they don't match your social circle.",
  "You sometimes feel like you're living the wrong life, but you're too committed to change now.",
  "You have a secret talent for reading people that makes you uncomfortable sometimes.",
  "You've maintained a lie for so long that it's become part of your identity.",
]; 