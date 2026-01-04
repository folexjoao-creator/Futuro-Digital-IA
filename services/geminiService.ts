
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAcademicAdvice = async (history: Message[], userInput: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Você é o Assistente Académico Inteligente do SIGAA-MZ.
        Seu objetivo é auxiliar estudantes moçambicanos com dúvidas sobre o portal e a vida académica em Moçambique.
        
        Contexto de Moçambique:
        - Instituição: Instituto Superior de Tecnologias de Maputo (ISTM).
        - Documentos: NUIT (Número Único de Identificação Tributária) e BI (Bilhete de Identidade).
        - Sistema de Notas: Escala de 0 a 20. Dispensa de exame geralmente com média igual ou superior a 14 valores. Exames de 1ª e 2ª época.
        - Termos Locais: Use 'Cadeiras' em vez de matérias, 'Pautas' para resultados, 'Matrícula' para inscrição anual.
        - Moeda: Metical (MZN).
        
        Responda de forma profissional, cortês e sempre em Português de Moçambique.`,
      }
    });

    const response = await chat.sendMessage({ message: userInput });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Houve um problema ao conectar com o servidor central do SIGAA-MZ em Maputo. Por favor, tente novamente em instantes.";
  }
};
