export default async function handler(req, res) {
const { prompt } = req.body;
const apiKey = process.env.GEMINI_API_KEY;
const url = "" + apiKey;
try {
const response = await fetch(url, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{ parts: [{ text: prompt }] }]
})
});
const data = await response.json();
if (data.error) {
return res.status(200).json({ text: "Erreur Google : " + data.error.message });
}
const result = data.candidates[0].content.parts[0].text;
res.status(200).json({ text: result });
} catch (error) {
res.status(200).json({ text: "Problème technique : " + error.message });
}
}
