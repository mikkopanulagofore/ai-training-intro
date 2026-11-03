### Your First Prompt

The best way to understand prompting is to do it. This section walks through creating a simple function by prompting with Claude Code.

**Example task:** Create a function that validates an email address.

**What makes a good prompt?**

A good prompt is:
- Written in English (models perform better in English for code tasks).
- Specific about the task, the technology, and the constraints.
- A specific prompt does not have to be a long one. 
- Clear about what "done" looks like (expected inputs, outputs, edge cases).

**Example of a weak prompt:**
```
write an email validator
```

**Example of a stronger prompt:**
```
Implement the validateEmail function in src/validateEmail.ts.

- TypeScript: take one string parameter and return a boolean
- Return true for a valid address such as user@example.com
- Return false for an empty string, a missing @, a missing domain, or spaces
- Do not use external libraries
- Run npm test and fix any failures
```

## Exercise

### Task

Prompt Claude Code to generate a simple email address validation function.

<!-- github-only -->
1. Clone your copy of this repository (the one created from the template) and open it in a terminal. You can copy the URL from the green **Code** button on your repository page.
<!-- /github-only -->
<!-- mcp-only
1. Claude has already written the starter files into this folder. Open a terminal here.
-->
2. Write the prompt yourself.
3. Review the generated code. If you do not understand any part of it, ask the AI to explain.
4. Verify that the code works by running the following commands in the project root:
```
npm install
npm run build
npm test
```
<!-- github-only -->
5. Commit and push the code to your course repository.
<!-- /github-only -->
<!-- mcp-only
5. Ask Claude to check your solution.
-->

<!-- github-only -->
### Automated Checks

The CI pipeline will verify:

1. The function exists and passes unit tests

**Note:** In order for the tests to pass, `src/validateEmail.ts` must have a function named `validateEmail` which...
* ...takes one `string` parameter.
* ...returns `boolean` value.

`src/validateEmail.ts` already has an empty function, that should be modified. When prompting the AI, you can ask it to modify the existing function.

<details>
<summary>Having trouble? 🤷</summary><br/>

 * If you're having trouble writing a prompt, you can always ask AI for a good prompt, or you can ask AI to ask questions to guide the prompt.
 * If nothing happens for a while after committing your code, or if the tests don't pass, check the [Actions](../actions) tab to see what went wrong. 
 * If you are still having trouble, ask for help in the course support channel.

</details>

---

<img alt="Amin 2.0" src="../images/amin2_smile.png" align="right" height="125px" />

Please, follow the steps above.
I'll watch your progress in the background to provide feedback. 🧐
<!-- /github-only -->
