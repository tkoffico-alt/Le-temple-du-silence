export default async function handler(req, res) {
try {
const { prompt } = req.body;
const apiKey = process.env.GEMINI_API_KEY;
const url = "" + apiKey;

const response = await fetch(url, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds de façon poétique à : " + prompt }] }]
})
});

const data = await response.json();
const messageDuSage = data.candidates[0].content.parts[0].text;
res.status(200).json({ text: messageDuSage });
} catch (error) {
res.status(200).json({ text: "Le courant est là, mais le Sage médite encore. Réessayez dans un instant." });
}
}
