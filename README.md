# Kaufmann Academy Component Library

A shared component library for Kaufmann.Academy web properties. This library provides consistent UI components, styles, and utilities that can be used across both the main website and the academy app.

## Features

- 🎨 Consistent design system based on Kaufmann.Academy brand
- 🧩 Reusable React components with TypeScript support
- 🛠️ Utility functions for common tasks
- 📱 Responsive design out of the box
- 🔄 Custom React hooks for advanced functionality

## Installation

```bash
# For npm
npm install @kaufmann/academy-components

# For yarn
yarn add @kaufmann/academy-components
```

## Usage

### Importing Components

```jsx
import { Button, Card, Input } from '@kaufmann/academy-components';

// Use the components in your React app
function MyComponent() {
  return (
    <Card>
      <h2>Contact Form</h2>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Using Utility Functions

```jsx
import { formatPrice, isValidEmail } from '@kaufmann/academy-components';

// Format currency
const price = formatPrice(1999); // "$1,999"

// Validate email
const isValid = isValidEmail('user@example.com'); // true
```

### Using Custom Hooks

```jsx
import { useMediaQuery, useLocalStorage } from '@kaufmann/academy-components';

function ResponsiveComponent() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>Current device: {isDesktop ? 'Desktop' : 'Mobile'}</p>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## Available Components

- **Button**: Multi-variant button component with loading state and icon support
- **Card**: Flexible card component with header and footer options
- **Form Components**:
  - **Input**: Text input with label, helper text, and error handling
  - **TextArea**: Multi-line text input with validation support

## Styling

The component library uses Tailwind CSS for styling. All components follow the Kaufmann.Academy branding guidelines, including colors, typography, and spacing.

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/kkaufmann/academy-components.git

# Install dependencies
cd academy-components
npm install

# Start development build with watch mode
npm run dev
```

### Building the Library

```bash
npm run build
```

This will generate the distribution files in the `dist` directory.

### Publishing

```bash
npm run build
npm publish
```

## Integration with Kaufmann.Academy Projects

### Main Website Integration

```bash
# From the main website directory
npm install ../academy-components
```

### Academy App Integration

```bash
# From the academy app directory
npm install ../academy-components
```

## Contributing

1. Create a branch for your feature or bugfix
2. Make your changes
3. Test your changes
4. Submit a pull request

## License

MIT
