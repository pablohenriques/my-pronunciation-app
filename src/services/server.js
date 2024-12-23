const { GoogleGenerativeAI } = require("@google/generative-ai");

async function getPronunciation(word) {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
            temperature: 0.0
        }
    });
    const prompt = `Informe a palavra '${word}' para o português como um brasileiro a pronunciaria. Informe apenas a pronúncia, sem explicações. Não traduza para o português, apenas mostre a pronúcia.`;

    try {
        const result = await model.generateContent(prompt);
        let response = result.response.text()
        return response;
    } catch (error) {
        console.error("Erro ao chamar API")
    }
}

export default getPronunciation;
