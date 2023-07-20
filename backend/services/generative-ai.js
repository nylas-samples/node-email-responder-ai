const dotenv = require('dotenv');
const { HfInference } = require('@huggingface/inference');

dotenv.config({ path: __dirname + '/../.env' });

const hf = new HfInference(process.env.HUGGINGFACE_HUB_API_KEY);

exports.generateEmailResponseGpt = async(startOfEmailResponse) => {
  const answer = await hf.textGeneration({
    model: "gpt2",
    inputs: startOfEmailResponse,
  });

  console.log({ answer })
  return answer;
}

exports.generateEmailResponse = async(emailBody) => {
  const answer = await hf.textGeneration({
    model: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
    inputs: `<|prompter|>Respond to the following email: ${emailBody}<|endoftext|><|assistant|>`,
  });

  console.log(answer);
  return answer;
}

// this.generateEmailResponseGpt("Let's grab a coffee on");

// this.generateEmailResponse("Would you like to grab a coffee?");