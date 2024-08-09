# Auto GPT

Automated use of GPT from OpenAI API through prompts present in a file.

Takes in prompts from input JSON file and outputs the response to output JSON lines file.

<details>
<summary>How it works?</summary>

**Primary Functionality:**

1. Reads the input JSON file `input.json` from the `data/input` directory.
2. Sends the prompts to the OpenAI API to get the responses.
3. Writes the responses to the output JSON lines file `output.jsonl` in the `data/output` directory.

**Under the Hood:**

Following happens in the `index.ts` file:

1. Imports data from `input.json` file into the `prompts` variable.
2. Initializes an agent that will use web search tool to process prompts and generate responses (method to get the agent present in the `agent.ts` file).
3. Uses the `processPrompts` function to process the prompts and write the responses to the output JSON lines file. Provides it with the input prompts data, the agent, and the output file path.
</details>

## Example

Given below content in `input.json`:

```json
{
  "prompts": [
    "Who is the current president of the United States?",
    "Who won gold in mens javelin throw event at the Paris Olympics 2024?"
  ]
}
```

The output JSON lines file `output.jsonl` may contain the following:

```json
{"prompt":"Who is the current president of the United States?","response":"The current president of the United States is Joe Biden. He is the 46th President of the United States. You can learn more about him on the [White House website](https://www.whitehouse.gov/administration/president-biden/).","timestamp":"2024-08-09T21:36:36.733Z"}
{"prompt":"Who won gold in mens javelin throw event at the Paris Olympics 2024?","response":"Arshad Nadeem from Pakistan won the gold medal in the men's javelin throw event at the Paris Olympics 2024. He set a new Olympic record with a throw of 92.97 meters. This victory marked Pakistan's first Olympic gold medal in athletics.","timestamp":"2024-08-09T21:36:39.906Z"}
```

## Getting Started

Follow the below steps to run the project on your local machine.

### Clone the Repository

Clone the repository to your local machine:

```bash copy
git clone https://github.com/pranav-kural/auto-gpt.git
```

### Setup Environment Variables

By default, this project uses the OpenAI API to interact with GPT. You need to set the `OPENAI_API_KEY` environment variable to your OpenAI API key. You can get your API key from the [OpenAI API](https://openai.com/api/) website.

Create a `.env` file in the root of the project and add the following line:

```env copy
OPENAI_API_KEY=your-api-key
```

### Input JSON File

Input prompts come from the input JSON file `input.json` which is present in the `input` directory under the `data` folder.

The input JSON file should have the following structure:

```json
{
  "prompts": ["Prompt 1", "Prompt 2", "Prompt 3"]
}
```

You can update the input JSON file with your prompts.

### Output JSON File

The output responses are written to the output JSON lines file `output.jsonl` which is present in the `output` directory under the `data` folder.

The output JSON lines file will have the following structure:

```json
{"prompt": "Prompt 1", "response": "Response 1", "timestamp": "2024-08-09T21:36:36.733Z"}
{"prompt": "Prompt 2", "response": "Response 2", "timestamp": "2024-08-09T21:36:39.906Z"}
{"prompt": "Prompt 3", "response": "Response 3", "timestamp": "2024-08-09T21:36:42.123Z"}
```

### Install Dependencies

Install the dependencies using PNPM:

```bash copy
pnpm install
```

### Compile Code

Use SWC to compile your TypeScript code:

```bash copy
pnpm build
```

Pre-configured to output the compiled code to the `lib` directory.

### Run the Code

Run the compiled code:

```bash copy
pnpm start
```

Pre-configured to run the `index.js` file in the `lib` directory.

### Development

You can also use the `dev` script instead when making changes to the source code. This script will compile your code and run it in watch mode:

```bash copy
pnpm dev
```

Pre-configured to watch the `src` directory for changes and recompile the code automatically. Please that this uses `tsx` and not `swc` for compilation.

### Testing

Pre-configured with Jest to run your tests. You can run the tests using the following command:

```bash copy
pnpm test
```

By default, Jest is configured to look for tests in `src/tests` directory. You can change the configuration in the `jest.config.js` file, along with any other Jest configurations you may want to change.

### Linting

Pre-configured with ESLint to enforce code quality and consistency. You can run ESLint using the following command:

```bash copy
pnpm lint
```

### Formatting

Pre-configured with Prettier to format your code automatically. You can run Prettier using the following command:

```bash copy
pnpm format
```

### Pre-deploy Workflow

An npm script `predeploy` is defined the `package.json` file to run the following in sequence:

1. `lint`: Run ESLint to enforce code quality and consistency.
2. `format`: Run Prettier to format your code automatically.
3. `build`: Compile your TypeScript code using SWC.
4. `test`: Run Jest to ensure your code works as expected.

```bash copy
pnpm predeploy
```

### GitHub Actions

Pre-configured with GitHub Actions to run your tests and lint your code automatically on every push. You can find the workflow configuration in the `.github/workflows` directory. Also, includes setup for dependabot to keep dependencies up-to-date. Learn more about [Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide).

## TypeScript Project Starter Template

This project was scaffolded using the [TypeScript Project Starter Template](https://github.com/pranav-kural/typescript-project-starter-template). It comes pre-configured with the following features:

- **TypeScript**: TypeScript to allow you to write type-safe code efficiently.
- **ESLint**: ESLint to enforce code quality and consistency.
- **Prettier**: Prettier to format your code automatically and ensure consistent code style.
- **Jest**: Jest to run your tests and ensure your code works as expected.
- **SWC**: For faster and more efficient TypeScript compilation.
- **PNPM**: PNPM to manage your dependencies efficiently.
- **GitHub Actions**: GitHub Actions to run your tests and lint your code automatically on every push.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues or bugs while using this project, please report them by following these steps:

1. Check if the issue has already been reported by searching our issue tracker.
2. If the issue hasn't been reported, create a new issue and provide a detailed description of the problem.
3. Include steps to reproduce the issue and any relevant error messages or screenshots.

[Open Issue](https://github.com/pranav-kural/typescript-project-starter-template/issues)
