import * as fs from 'fs';
import {HumanMessage} from '@langchain/core/messages';
import {AgentType} from './agent';

// function to generate output using input prompts
const generateOutput = async (input: string, agent: AgentType) => {
  const agentFinalState = await agent.invoke(
    {messages: [new HumanMessage(input)]},
    {configurable: {thread_id: '42'}}
  );
  return agentFinalState.messages[agentFinalState.messages.length - 1].content;
};

/**
 * Parameters for the processPrompts function.
 *
 * @typedef {Object} ProcessPromptsParams - Parameters for the processPrompts function.
 *
 * @property {string[]} prompts - The prompts to process.
 * @property {AgentType} agent - The agent to use for processing the prompts.
 * @property {string} [outputFilePath='output.json'] - The path to the output file.
 * @property {boolean} [clearFileBeforeRun=true] - Whether to clear the output file before running the prompts.
 */
type ProcessPromptsParams = {
  prompts: string[];
  agent: AgentType;
  outputFilePath?: string;
  clearFileBeforeRun?: boolean;
};

/**
 * Process the given prompts using the provided agent and write the responses to the output file.
 *
 * For parameters, accepts an object with the following properties:
 * @param {prompts} prompts - The prompts to process.
 * @param {AgentType} agent - The agent to use for processing the prompts.
 * @param {string} [outputFilePath='output.json'] - The path to the output file.
 * @param {boolean} [clearFileBeforeRun=true] - Whether to clear the output file before running the prompts.
 */
export async function processPrompts({
  prompts,
  agent,
  outputFilePath = 'output.json',
  clearFileBeforeRun = true,
}: ProcessPromptsParams) {
  // if clearFileBeforeRun is true, clear the output file before running the prompts
  if (clearFileBeforeRun) {
    fs.writeFileSync(outputFilePath, '');
  }

  // iterate over each prompt
  for (const prompt of prompts) {
    // generate output for each prompt
    const res = await generateOutput(prompt, agent);
    // prepare the output JSON
    const output = {
      prompt: prompt,
      response: res,
      timestamp: new Date().toISOString(),
    };
    // append output to the output JSON file
    writeOutput(JSON.stringify(output), outputFilePath);
    // wait for 10 milliseconds to avoid rate limiting for web search tool
    setTimeout(() => {}, 10);
  }
}

// function to append output to the output JSON file
function writeOutput(output: string, filePath: string) {
  // write new line character if the file is not empty
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    output = '\n' + output;
  }
  // append output to the output JSON file
  fs.appendFileSync(filePath, output);
}
