# Expo Project Structure 👋

This is an [Expo](https://expo.dev) that I have built in a phase of discovery, in order to establish an optimal developer workflow, when working with Native apps.

## Implementations

1. [Expo Router](https://docs.expo.dev/router/introduction)
   - Used a grouping structure to organise stacks
   - Create a `Stack` on the **app** level and then nested `Stacks` for each group
2. [Biome Linter](https://biomejs.dev/)
   - Basic rules available at `biome.json`
   - Implemented **pre-commit checks**, using [Lefthook](https://biomejs.dev/recipes/git-hooks/#lefthook)
3. [Unit Testing w/ @testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/)
4. [E2E Testing w/ maestro](https://docs.expo.dev/build-reference/e2e-tests/)
5. **File Structure**: example component structure, with *imports, hooks, logic, functions, return JSX, and styling