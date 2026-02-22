export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  // Cette URL demande la liste des modèles autorisés pour VOTRE clé
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return res.status(200).json({ text: "Erreur de Clé : " + data.error.message });
    }

    // On extrait les noms des modèles disponibles pour vous
    const modelNames = data.models ? data.models.map(m => m.name.replace('models/', '')) : [];
    
    if (modelNames.length > 0) {
      res.status(200).json({ text: "Modèles accessibles : " + modelNames.join(", ") });
    } else {
      res.status(200).json({ text: "La clé est valide, mais aucun modèle n'est rattaché à ce projet." });
    }

  } catch (error) {
    res.status(200).json({ text: "Le Temple est inaccessible : " + error.message });
  }
}
