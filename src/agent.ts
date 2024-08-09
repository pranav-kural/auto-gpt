import {webSearchTool} from './tools';
import {ChatOpenAI} from '@langchain/openai';
import {CompiledStateGraph, MemorySaver, START} from '@langchain/langgraph';
import {AgentState, createReactAgent} from '@langchain/langgraph/prebuilt';
import 'dotenv/config';

// Define the agent type
export type AgentType = CompiledStateGraph<
  AgentState,
  Partial<AgentState>,
  typeof START | 'agent' | 'tools'
>;

/**
 * Method to get the agent which will use web search to process prompts and generate responses.
 * @returns {AgentType} - The agent to use for processing prompts and generating responses.
 */
export function getAgent(): AgentType {
  // Define the tools that the agent will use
  const agentTools = [webSearchTool];

  // Initialize the OpenAI model
  const agentModel = new ChatOpenAI({
    temperature: 0.5,
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Initialize memory to persist state between graph runs
  const agentCheckpointer = new MemorySaver();

  // return the agent
  return createReactAgent({
    llm: agentModel,
    tools: agentTools,
    checkpointSaver: agentCheckpointer,
  });
}
