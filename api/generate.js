export default async function handler(req, res) {
const { prompt } = req.body;
const apiKey = process.env.GEMINI_API_KEY;
const url = "" + apiKey;
const systemPrompt = "Tu es le Sage AYP. Ton ton est poétique, masculin et calme. Tu illustres tes réponses avec l'histoire de Kofi et sa rivière. Tu définis la Kundalini comme la conductivité extatique du système nerveux (Yogani).";
try {
const response = await fetch(url, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ contents: [{ parts: [{ text: systemPrompt + " Question: " + prompt }] }] })
});
const data = await response.json();
res.status(200).json({ text: data.candidates[0].content.parts[0].text });
} catch (error) {
res.status(500).json({ error: "Erreur de connexion au Sage" });
}
}
