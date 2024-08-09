import * as DATA from '../data/input.json';
import {getAgent} from './agent';
import {processPrompts} from './core';
import {resolve} from 'path';

// Get prompts from data/input.json
const prompts = DATA.prompts;
// Prepare and get the agent which will use web search to process prompts and generate responses
const agent = getAgent();
// Define the output file path
const outputFilePath = resolve(__dirname, '../data/output.jsonl');

// Process prompts using the agent and write the responses to the output file
processPrompts({
  prompts,
  agent,
  outputFilePath,
});
