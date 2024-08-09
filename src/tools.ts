import {DuckDuckGoSearch} from '@langchain/community/tools/duckduckgo_search';

/**
 * The web search tool to use for processing prompts and generating responses.
 */
export const webSearchTool = new DuckDuckGoSearch({
  maxResults: 5,
  searchOptions: {
    region: 'us-en',
    locale: 'en-us',
    safeSearch: 0, // 0 = strict, -1 = moderate, -2 = off
  },
});
