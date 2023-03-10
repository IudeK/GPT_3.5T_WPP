//Integração do chat GPT 3.5 Turbo com wpp
//devoleped by Iude Kildare de Meneses 
//https://github.com/IudeK

import { create } from 'venom-bot'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai"

dotenv.config()

create({
    session: 'Chat-GPT',
    multidevice: true
})
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

const configuration = new Configuration({
    organization: process.env.ORGANIZATION_ID,
    apiKey: process.env.OPENAI_KEY,
    basePath: 'https://api.openai.com/v1'
});

const openai = new OpenAIApi(configuration);

const getGPTResponse = async (clientText) => {
    const options = {
        model: "gpt-3.5-turbo", 
        messages: [
            {"role": "user", "content": clientText},
          ],
        temperature: 1, 
        max_tokens: 4000, 
    }

    try {
        const response = await openai.createChatCompletion(options);
        let botResponse = response["data"]["choices"][0]["message"]["content"]

        return `Chat GPT:\n\n ${botResponse.trim()}`
    } catch (e) {
        return `Response Error: ${e.response.data.error.message}`
    }
}

function commands(client, message) {

    const start = "/gpt"

    let comando = message.text.substring(0, message.text.indexOf(" "));

    if (comando == start) {
        const question = message.text.substring(message.text.indexOf(" "));
        getGPTResponse(question).then((response) => {
            client.sendText(message.from === process.env.BOT_NUMBER ? message.to : message.from, response);
        });
    }
    return
}

async function start(client) {
    client.onAnyMessage((message) => commands(client, message));
}
