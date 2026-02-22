export default async function handler(req, res) {
const { prompt } = req.body;
const apiKey = process.env.GEMINI_API_KEY;
const url = "" + apiKey;

try {
const response = await fetch(url, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec poésie à : " + prompt }] }]
})
});

} catch (error) {
res.status(200).json({ text: "Le Sage cherche ses mots... (Erreur : " + error.message + ")" });
}
}
