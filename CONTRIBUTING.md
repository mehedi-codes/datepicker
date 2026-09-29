# Contributing to DatePicker

Thank you for your interest in contributing to the DatePicker project! This document provides guidelines and instructions.

## Code of Conduct

We are committed to providing a welcoming and inspiring community. Please read and follow our Code of Conduct.

## Getting Started

### Setup with Bun

```bash
git clone https://github.com/mehedi-codes/datepicker.git
cd datepicker
bun install
bun run dev
```

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check existing issues. When creating a bug report, include:

- **Clear title** - Concise description of the issue
- **Detailed description** - What happened and what you expected
- **Steps to reproduce** - Exact steps to reproduce the problem
- **Screenshots** - Visual evidence if applicable
- **Environment** - OS, browser, Bun version

### Suggesting Features

Feature suggestions are tracked as GitHub issues. Include:

- **Clear title** - What is the feature about?
- **Detailed description** - How should it work?
- **Use cases** - Why would this be useful?
- **Possible implementation** - Any ideas on how to implement it?

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Ensure TypeScript checks pass: `bun run type-check`
5. Run linter: `bun run lint`
6. Format code: `bun run format`
7. Commit with clear message: `git commit -m 'Add amazing feature'`
8. Push to branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

## Development Workflow

### Commands

```bash
# Development server with hot reload
bun run dev

# Build for production (TypeScript compilation + Vite bundling)
bun run build

# Preview production build locally
bun run preview

# Type checking
bun run type-check

# Linting
bun run lint

# Format code with Prettier
bun run format
```

## Code Standards

- **Language**: TypeScript with strict mode enabled (`.ts` and `.tsx` files only)
- **Style**: Follow existing code patterns
- **Components**: Use React functional components with TypeScript
- **Testing**: Add tests for new features
- **Documentation**: Update README and docs as needed
- **Formatting**: Use Prettier (run `bun run format`)

## TypeScript Guidelines

- Use strict type annotations
- Avoid `any` type
- Export interfaces and types
- Use meaningful variable names
- Document complex logic with comments

## Commit Message Guidelines

Write clear, descriptive commit messages:

- Use imperative mood: "Add feature" not "Added feature"
- Limit first line to 72 characters
- Reference issues: "Fixes #123" or "Closes #456"
- Explain what and why, not how

### Examples

```
Add DatePicker component exports

Fix calendar navigation issue on month change

Update documentation with TypeScript examples
```

## Testing

When adding new features:

1. Ensure the feature works as expected
2. Test edge cases
3. Check TypeScript compilation: `bun run type-check`
4. Verify ESLint passes: `bun run lint`

## Documentation

- Keep README.md updated
- Add JSDoc comments for public APIs
- Include code examples for new features
- Update type definitions in `src/types/index.ts`

## Questions?

Feel free to:
- Open a GitHub issue for questions
- Start a discussion for ideas
- Ask in pull request comments

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

**Thank you for contributing! 🎉**
