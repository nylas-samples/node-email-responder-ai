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

this.generateEmailResponseGpt("Let's grab a coffee on");