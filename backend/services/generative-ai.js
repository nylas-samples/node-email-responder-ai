const dotenv = require('dotenv');
const { HfInference } = require('@huggingface/inference');

dotenv.config({ path: __dirname + '/../.env' });

const hf = new HfInference(process.env.HUGGINGFACE_HUB_API_KEY);

const retrieveAssistantResponse = str => str.trim().split('|>')[3];

exports.generateEmailResponseGpt = async(startOfEmailResponse) => {
  const answer = await hf.textGeneration({
    model: "gpt2",
    inputs: startOfEmailResponse,
  });

  console.log({ answer })
  return answer;
}

const multipleCalls = async(answer) => {
  let count = 5;

  while(true) {
    let newAnswer = await hf.textGeneration({
      model: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
      inputs: answer.generated_text,
    });

    // Loop escape hatch
    if(answer.generated_text === newAnswer.generated_text || count <= 1) break;

    answer = newAnswer;
    count--;
  }

  return answer;
}

exports.generateEmailResponse = async(emailBody) => {
  const answer = await hf.textGeneration({
    model: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
    inputs: `<|prompter|>Respond to the following email: ${emailBody}<|endoftext|><|assistant|>`,
  });

  const response = await multipleCalls(answer);

  console.log(response);
  return retrieveAssistantResponse(response.generated_text);
}

// this.generateEmailResponseGpt("Let's grab a coffee on");

// this.generateEmailResponse("Would you like to grab a coffee?");