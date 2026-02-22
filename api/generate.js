export default async function (req, res) {
try {
const { prompt } = req.body;
const apiKey = process.env.GEMINI_API_KEY;
const url = "" + apiKey;

} catch (error) {
res.status(200).json({ text: "Le courant est troublé. Erreur technique : " + error.message });
}
}
