export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Remplacez la ligne 6 par celle-ci (sans le mot 'latest') :
const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Tu es le Sage AYP. Réponds avec une poésie concise à : " + prompt }] }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      // Si la limite est aussi à zéro ici, le Sage nous le dira
      return res.status(200).json({ text: "Note du Sage : " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      const result = data.candidates[0].content.parts[0].text;
      res.status(200).json({ text: result });
    } else {
      res.status(200).json({ text: "Le Sage est dans un profond silence..." });
    }

  } catch (error) {
    res.status(200).json({ text: "Le lien est rompu : " + error.message });
  }
}
