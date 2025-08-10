export const LANGUAGES = [
  "Kannada",
  "Hindi",
  "Malayalam",
  "Tamil",
  "Telugu",
  "Marathi",
  "Punjabi",
  "Gujarati",
  "Odiya",
  "Assamese",
  "English",
  "French",
  "Chinese",
  "Korean",
  "Japanese",
  "Spanish",
  "German",
  "Italian",
] as const;

export type Language = typeof LANGUAGES[number];
