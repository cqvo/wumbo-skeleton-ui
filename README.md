# Wumbo Skeleton UI

A Svelte component library built with SvelteKit, Tailwind CSS, and Skeleton Labs components.

## Project Structure

```
src/
├── lib/                    # Library source code
│   ├── atomic/            # Base atomic components
│   │   ├── input/         # Input components (Checkbox, Input, Label, Select)
│   │   └── ui/            # UI components (Badge, Button, Card parts, Chip, Link)
│   ├── components/        # Composed components (Card)
│   ├── form/              # Form components (Form, Input, Textarea)
│   ├── common/            # Shared types and utilities
│   └── index.ts           # Main library exports
└── routes/                # Showcase/preview app
```

## Development

### Setup

```bash
pnpm install
```

### Development Server

```bash
pnpm dev              # Start showcase app
pnpm storybook        # Start Storybook component viewer
```

### Building

```bash
pnpm build            # Build showcase app + package library
pnpm prepack          # Package library only
```

## Publishing to NPM

This project uses semantic-release for automated versioning and publishing. Releases are triggered automatically when commits are pushed to the `main` branch.

### Commit Message Format

Use Angular commit message convention to trigger releases:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation-only changes
- `style`: Changes that do not affect the meaning or function of the code (formatting, whitespace, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Add missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as document generation

### Release Process

1. Push to main branch - **semantic-release** automatically:

- Analyzes commit messages since last release 
- Determines version bump (patch/minor/major)
- Builds the package via `prepack` script 
- Publishes to NPM 
- Creates GitHub release with changelog

2. **Manual release** (if needed):

```bash
pnpm build            # Ensure clean build  
pnpm dlx semantic-release  # Run semantic-release locally
```

### Setup Requirements

- `GITHUB_TOKEN` and `NPM_TOKEN` must be configured in repository secrets
- Commits must follow conventional commit format

## Development with `pnpm link`

### Link this package for development:

```bash
# In this project directory
pnpm build            # Build the package first
pnpm link --global    # Create global symlink
```

### Use in another project:

```bash
# In your consuming project
pnpm link --global wumbo-skeleton-ui
```

### During development:

```bash
# In this project - rebuild after changes
pnpm build

# Your consuming project will automatically use the updated version
```

### Unlink when done:

```bash
# In consuming project
pnpm unlink --global wumbo-skeleton-ui

# In this project
pnpm unlink --global
```

## Usage

After installation, import components:

```javascript
import { Button, Card, Input } from 'wumbo-skeleton-ui';
```

> **Note:** Components must be exported in `src/lib/index.ts` to be available for import.

## Component Development

- Each component follows Svelte 5 runes syntax
- Components include TypeScript definitions
- Storybook stories are provided for documentation
- Styling uses Tailwind CSS with Skeleton Labs classes

View components in Storybook: `pnpm storybook`