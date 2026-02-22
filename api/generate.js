export default async function handler(req, res) {
const { prompt } = req.body;
const apiKey = process.env.GEMINI_API_KEY;
const url = "" + apiKey;
try {
const response = await fetch(url, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec calme à : " + prompt }] }]
})
});
const data = await response.json();
const result = data.candidates[0].content.parts[0].text;
res.status(200).json({ text: result });
} catch (error) {
res.status(200).json({ text: "Le courant est là, mais le Sage médite encore. Vérifiez la clé API dans Vercel." });
}
}
