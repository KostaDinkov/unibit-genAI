// file: /prompts/promptUtils.js
export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are an AI-powered startup idea generator. Generate innovative startup ideas based on emerging technologies and market trends.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a startup idea about ${input}`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_startup_idea",
      description: "Generate an innovative startup idea.",
      parameters: {
        type: "object",
        properties: {
          ideaDescription: {
            type: "string",
            description: "Detailed description of the startup idea",
          },
          targetAudience: {
            type: "string",
            description: "Potential target audience for the startup",
          },
          marketOpportunity: {
            type: "string",
            description: "Identified market opportunity for the startup",
          },
        },
        required: ["ideaDescription", "targetAudience", "marketOpportunity"]
      },
    },
  ];
}
