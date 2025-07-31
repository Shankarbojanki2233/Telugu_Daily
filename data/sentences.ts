// Telugu Daily - Sample Sentence Data
// In production, this would be loaded from a database or API

export interface Sentence {
  id: number;
  telugu: string;
  english: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export const sentences: Sentence[] = [
  // Day 1 (1-50) - Basic Greetings & Introductions
  { id: 1, telugu: "నమస్కారం", english: "Hello/Greetings", category: "greetings" },
  { id: 2, telugu: "మీ పేరు ఏమిటి?", english: "What is your name?", category: "greetings" },
  { id: 3, telugu: "నా పేరు రాజు", english: "My name is Raju", category: "greetings" },
  { id: 4, telugu: "మీరు ఎలా ఉన్నారు?", english: "How are you?", category: "greetings" },
  { id: 5, telugu: "నేను బాగా ఉన్నాను", english: "I am fine", category: "greetings" },
  { id: 6, telugu: "ధన్యవాదాలు", english: "Thank you", category: "greetings" },
  { id: 7, telugu: "క్షమించండి", english: "Sorry/Excuse me", category: "greetings" },
  { id: 8, telugu: "వీడ్కోలు", english: "Goodbye", category: "greetings" },
  { id: 9, telugu: "మళ్లీ కలుద్దాం", english: "See you again", category: "greetings" },
  { id: 10, telugu: "మీకు తెలుగు తెలుసా?", english: "Do you know Telugu?", category: "language" },
  { id: 11, telugu: "నాకు తెలుగు తెలుసు", english: "I know Telugu", category: "language" },
  { id: 12, telugu: "నాకు తెలుగు రాదు", english: "I don't know Telugu", category: "language" },
  { id: 13, telugu: "నేను నేర్చుకుంటున్నాను", english: "I am learning", category: "language" },
  { id: 14, telugu: "మీరు ఎక్కడ నుండి వచ్చారు?", english: "Where are you from?", category: "personal" },
  { id: 15, telugu: "నేను హైదరాబాదు నుండి", english: "I am from Hyderabad", category: "personal" },
  { id: 16, telugu: "మీ వయసు ఎంత?", english: "What is your age?", category: "personal" },
  { id: 17, telugu: "నా వయసు ఇరవై ఐదు", english: "My age is twenty-five", category: "personal" },
  { id: 18, telugu: "మీరు ఏమి చేస్తారు?", english: "What do you do?", category: "work" },
  { id: 19, telugu: "నేను ఇంజనీర్ని", english: "I am an engineer", category: "work" },
  { id: 20, telugu: "మీ కుటుంబం ఎలా ఉంది?", english: "How is your family?", category: "family" },
  { id: 21, telugu: "నా కుటుంబం బాగా ఉంది", english: "My family is fine", category: "family" },
  { id: 22, telugu: "మీకు ఎంత మంది పిల్లలు?", english: "How many children do you have?", category: "family" },
  { id: 23, telugu: "నాకు ఇద్దరు పిల్లలు", english: "I have two children", category: "family" },
  { id: 24, telugu: "మీరు వివాహితులా?", english: "Are you married?", category: "personal" },
  { id: 25, telugu: "అవును, నేను వివాహితుడిని", english: "Yes, I am married", category: "personal" },
  { id: 26, telugu: "లేదు, నేను అవివాహితుడిని", english: "No, I am unmarried", category: "personal" },
  { id: 27, telugu: "మీ భార్య ఎలా ఉంది?", english: "How is your wife?", category: "family" },
  { id: 28, telugu: "నా భార్య బాగా ఉంది", english: "My wife is fine", category: "family" },
  { id: 29, telugu: "మీ భర్త ఎలా ఉంది?", english: "How is your husband?", category: "family" },
  { id: 30, telugu: "నా భర్త బాగా ఉంది", english: "My husband is fine", category: "family" },
  { id: 31, telugu: "మీ తల్లిదండ్రులు ఎలా ఉన్నారు?", english: "How are your parents?", category: "family" },
  { id: 32, telugu: "నా తల్లిదండ్రులు బాగా ఉన్నారు", english: "My parents are fine", category: "family" },
  { id: 33, telugu: "మీకు సోదరులు ఉన్నారా?", english: "Do you have brothers?", category: "family" },
  { id: 34, telugu: "నాకు ఒక సోదరుడు ఉన్నాడు", english: "I have one brother", category: "family" },
  { id: 35, telugu: "మీకు సోదరీమణులు ఉన్నారా?", english: "Do you have sisters?", category: "family" },
  { id: 36, telugu: "నాకు రెండు సోదరీమణులు", english: "I have two sisters", category: "family" },
  { id: 37, telugu: "మీరు ఎక్కడ నివసిస్తున్నారు?", english: "Where do you live?", category: "personal" },
  { id: 38, telugu: "నేను బెంగళూరులో నివసిస్తున్నాను", english: "I live in Bangalore", category: "personal" },
  { id: 39, telugu: "మీ ఇల్లు ఎక్కడ ఉంది?", english: "Where is your house?", category: "personal" },
  { id: 40, telugu: "నా ఇల్లు చెన్నైలో ఉంది", english: "My house is in Chennai", category: "personal" },
  { id: 41, telugu: "మీకు తెలుగు అర్థమవుతుందా?", english: "Do you understand Telugu?", category: "language" },
  { id: 42, telugu: "అవును, నాకు అర్థమవుతుంది", english: "Yes, I understand", category: "language" },
  { id: 43, telugu: "లేదు, నాకు అర్థం కాలేదు", english: "No, I don't understand", category: "language" },
  { id: 44, telugu: "దయచేసి మళ్లీ చెప్పండి", english: "Please say again", category: "language" },
  { id: 45, telugu: "నెమ్మదిగా మాట్లాడండि", english: "Speak slowly", category: "language" },
  { id: 46, telugu: "ఆ వ్యక్తి ఎవరు?", english: "Who is that person?", category: "general" },
  { id: 47, telugu: "అతను నా స్నేహితుడు", english: "He is my friend", category: "general" },
  { id: 48, telugu: "ఆమె నా కొత్త సహోద్యోగి", english: "She is my new colleague", category: "general" },
  { id: 49, telugu: "మీరు ఎప్పుడు వచ్చారు?", english: "When did you come?", category: "time" },
  { id: 50, telugu: "నేను నిన్న వచ్చాను", english: "I came yesterday", category: "time" },

  // Day 2 (51-100) - Daily Activities & Time
  { id: 51, telugu: "ఇప్పుడు ఎంత సమయం?", english: "What time is it now?", category: "time" },
  { id: 52, telugu: "ఇప్పుడు పది గంటలు", english: "It's ten o'clock now", category: "time" },
  { id: 53, telugu: "నేను రోజూ ఆరు గంటలకు లేస్తాను", english: "I wake up at six daily", category: "routine" },
  { id: 54, telugu: "మీరు ఎప్పుడు నిద్రపోతారు?", english: "When do you sleep?", category: "routine" },
  { id: 55, telugu: "నేను పది గంటలకు నిద్రపోతాను", english: "I sleep at ten o'clock", category: "routine" },
  { id: 56, telugu: "మీరు ఉదయం ఏమి తింటారు?", english: "What do you eat in the morning?", category: "food" },
  { id: 57, telugu: "నేను ఇడ్లీ సాంబార్ తింటాను", english: "I eat idli sambar", category: "food" },
  { id: 58, telugu: "మీకు కాఫీ కావాలా టీ కావాలా?", english: "Do you want coffee or tea?", category: "food" },
  { id: 59, telugu: "నాకు కాఫీ కావాలి", english: "I want coffee", category: "food" },
  { id: 60, telugu: "నేను ఆఫీసుకు వెళ్ళాలి", english: "I have to go to office", category: "work" },
  { id: 61, telugu: "మీరు ఎలా ఆఫీసుకు వెళ్తారు?", english: "How do you go to office?", category: "travel" },
  { id: 62, telugu: "నేను బస్సులో వెళ్తాను", english: "I go by bus", category: "travel" },
  { id: 63, telugu: "ఈ రోజు వాతావరణం ఎలా ఉంది?", english: "How is the weather today?", category: "weather" },
  { id: 64, telugu: "ఈ రోజు చాలా వేడిమిగా ఉంది", english: "It's very hot today", category: "weather" },
  { id: 65, telugu: "వర్షం వస్తుంది", english: "It's going to rain", category: "weather" },
  { id: 66, telugu: "మీరు షాపింగ్ కు వెళ్తారా?", english: "Are you going shopping?", category: "activities" },
  { id: 67, telugu: "అవును, నేను మార్కెట్ కు వెళ్తాను", english: "Yes, I'm going to the market", category: "activities" },
  { id: 68, telugu: "మీకు ఏమైనా కావాలా?", english: "Do you need anything?", category: "general" },
  { id: 69, telugu: "నాకు కొన్ని కూరగాయలు కావాలి", english: "I need some vegetables", category: "food" },
  { id: 70, telugu: "ఈ టమోటాలు ఎంత ధర?", english: "What's the price of these tomatoes?", category: "shopping" },
  { id: 71, telugu: "ఒక కిలో ముప్పై రూపాయలు", english: "Thirty rupees per kilogram", category: "shopping" },
  { id: 72, telugu: "కొంచెం తక్కువ చేయండి", english: "Please reduce the price a little", category: "shopping" },
  { id: 73, telugu: "ఇది చాలా ఖరీదు", english: "This is very expensive", category: "shopping" },
  { id: 74, telugu: "మీకు చిల్లర ఉందా?", english: "Do you have change?", category: "money" },
  { id: 75, telugu: "నాకు చిల్లర లేదు", english: "I don't have change", category: "money" },
  { id: 76, telugu: "మీరు భోజనం చేశారా?", english: "Have you had your meal?", category: "food" },
  { id: 77, telugu: "లేదు, ఇంకా చేయలేదు", english: "No, not yet", category: "food" },
  { id: 78, telugu: "మీకు ఆకలిగా ఉందా?", english: "Are you hungry?", category: "feelings" },
  { id: 79, telugu: "అవును, చాలా ఆకలిగా ఉంది", english: "Yes, I'm very hungry", category: "feelings" },
  { id: 80, telugu: "మీకు దాహం వేస్తుందా?", english: "Are you thirsty?", category: "feelings" },
  { id: 81, telugu: "అవును, నాకు నీళ్లు కావాలి", english: "Yes, I need water", category: "feelings" },
  { id: 82, telugu: "మీరు ఎక్కడికి వెళ్తున్నారు?", english: "Where are you going?", category: "travel" },
  { id: 83, telugu: "నేను బ్యాంకుకు వెళ్తున్నాను", english: "I'm going to the bank", category: "travel" },
  { id: 84, telugu: "బ్యాంకు ఎక్కడ ఉంది?", english: "Where is the bank?", category: "directions" },
  { id: 85, telugu: "ఆ రోడ్డులో కుడి వైపున ఉంది", english: "It's on the right side of that road", category: "directions" },
  { id: 86, telugu: "ఎంత దూరం ఉంది?", english: "How far is it?", category: "directions" },
  { id: 87, telugu: "కేవలం రెండు కిలోమీటర్లు", english: "Just two kilometers", category: "directions" },
  { id: 88, telugu: "నడుచుకుంటూ వెళ్ళవచ్చా?", english: "Can I walk there?", category: "travel" },
  { id: 89, telugu: "అవును, వెళ్ళవచ్చు", english: "Yes, you can go", category: "travel" },
  { id: 90, telugu: "మీరు ఇంట్లో ఉన్నారా?", english: "Are you at home?", category: "location" },
  { id: 91, telugu: "లేదు, నేను ఆఫీసులో ఉన్నాను", english: "No, I'm at the office", category: "location" },
  { id: 92, telugu: "మీరు ఎప్పుడు ఇంటికి వస్తారు?", english: "When will you come home?", category: "time" },
  { id: 93, telugu: "నేను సాయంత్రం ఆరు గంటలకు వస్తాను", english: "I'll come at six in the evening", category: "time" },
  { id: 94, telugu: "ఈ రోజు సెలవు దినమా?", english: "Is today a holiday?", category: "time" },
  { id: 95, telugu: "అవును, ఈ రోజు ఆదివారం", english: "Yes, today is Sunday", category: "time" },
  { id: 96, telugu: "రేపు మనం ఎక్కడికి వెళ్ళాలి?", english: "Where should we go tomorrow?", category: "plans" },
  { id: 97, telugu: "రేపు మనం సినిమాకు వెళ్ళాలి", english: "We should go to the movies tomorrow", category: "plans" },
  { id: 98, telugu: "మీకు ఏ సినిమా అంటే ఇష్టం?", english: "Which movie do you like?", category: "entertainment" },
  { id: 99, telugu: "నాకు కామెడీ సినిమాలు అంటే ఇష్టం", english: "I like comedy movies", category: "entertainment" },
  { id: 100, telugu: "రేపు మనం కలుద్దాం", english: "Let's meet tomorrow", category: "plans" },

  // Continue generating more sentences for days 3-200...
  // For demo purposes, I'll add a few more sets

  // Day 3 (101-150) - Food & Restaurants
  { id: 101, telugu: "మీకు ఏ రకమైన ఆహారం అంటే ఇష్టం?", english: "What type of food do you like?", category: "food" },
  { id: 102, telugu: "నాకు తెలుగు వంటకాలు చాలా ఇష్టం", english: "I like Telugu dishes very much", category: "food" },
  { id: 103, telugu: "ఈ హోటల్ లో ఏమైనా మంచి ఉందా?", english: "Is there anything good in this hotel?", category: "restaurant" },
  { id: 104, telugu: "ఇక్కడ బిర్యానీ చాలా మంచిది", english: "The biryani here is very good", category: "restaurant" },
  { id: 105, telugu: "ఒక ప్లేట్ బిర్యానీ ఇవ్వండి", english: "Please give one plate biryani", category: "restaurant" },
  // ... continue with more food-related sentences

  // Day 4 (151-200) - Health & Body
  { id: 151, telugu: "మీకు ఎలా అనిపిస్తుంది?", english: "How do you feel?", category: "health" },
  { id: 152, telugu: "నాకు తలనొప్పి వస్తుంది", english: "I have a headache", category: "health" },
  { id: 153, telugu: "మీరు డాక్టర్ ని కలవాలి", english: "You should see a doctor", category: "health" },
  { id: 154, telugu: "దగ్గు వస్తుంది", english: "I have a cough", category: "health" },
  { id: 155, telugu: "జ్వరం ఉంది", english: "I have fever", category: "health" },
  // ... continue with more health-related sentences

  // Day 5 (201-250) - Travel & Transportation
  { id: 201, telugu: "బస్ స్టాప్ ఎక్కడ ఉంది?", english: "Where is the bus stop?", category: "travel" },
  { id: 202, telugu: "రైలు స్టేషన్ కు ఎలా వెళ్ళాలి?", english: "How to go to the railway station?", category: "travel" },
  { id: 203, telugu: "ఈ బస్ హైదరాబాదుకు వెళ్తుందా?", english: "Does this bus go to Hyderabad?", category: "travel" },
  { id: 204, telugu: "టికెట్ ఎంత ధర?", english: "What's the ticket price?", category: "travel" },
  { id: 205, telugu: "రైలు ఎప్పుడు వస్తుంది?", english: "When does the train come?", category: "travel" },
  // ... continue with more travel-related sentences

  // For demo purposes, let's add placeholder sentences to reach 10,000
  // In a real app, you'd have comprehensive, well-organized sentence data
  ...Array.from({ length: 9750 }, (_, index) => ({
    id: 251 + index,
    telugu: `వాక్యం ${251 + index}`,
    english: `Sentence ${251 + index}`,
    category: "generated" as const,
    difficulty: "beginner" as const,
  })),
];

// Helper functions for sentence management
export const getSentencesByDay = (day: number): Sentence[] => {
  const startIndex = (day - 1) * 50;
  const endIndex = day * 50;
  return sentences.slice(startIndex, endIndex);
};

export const getSentencesByRange = (start: number, end: number): Sentence[] => {
  return sentences.slice(start - 1, end);
};

export const getTotalSentenceCount = (): number => {
  return sentences.length;
};

export const getSentenceById = (id: number): Sentence | undefined => {
  return sentences.find(sentence => sentence.id === id);
};