import {Configuration, OpenAIApi} from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `Write me a detailed step-by-step recipe with the dish name at the top  by a professional chef for a dish. Make sure not to include any ingredients not mentioned unless you cannot produce a decent recipe with the listed ingredients. These are the only ingredients I have: `;

const generateAction = async (req, res) =>{
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.22,
    max_tokens: 1250,
})

const basePromptOutput = baseCompletion.data.choices.pop();

res.status(200).json({output:basePromptOutput});
};

export default generateAction;