# 🎮 Pixelact UI

> A pixel-themed React component registry built on top of [shadcn/ui](https://ui.shadcn.dev/) — familiar structure, retro aesthetics.

**Pixelact UI** combines the structure and flexibility of `shadcn/ui` with a playful pixel-art style — perfect for retro interfaces, games, or nostalgic UIs. Components are installed individually via the shadcn registry, making them fully customizable, Tailwind-based, and easily composable.

---

## 📦 Installation

### Prerequisites

Make sure you have **shadcn/ui** set up in your project first:

```bash
npx shadcn@latest init
```

### Install Components

Install individual components using the shadcn CLI:

```bash
npx shadcn@latest add https://pixelactui.com/r/'pixact-component'.json
```

This will automatically install the components and their dependencies to your `components/ui/pixelact-ui/` directory.

---

## 🚀 Quick Start

After installing components via the registry, use them like this:

```tsx
import { Button } from "@/components/ui/pixelact-ui/button";
import { Input } from "@/components/ui/pixelact-ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/pixelact-ui/dialog";

export default function App() {
  return (
    <div>
      <Button variant="default">Press Start</Button>

      <Input placeholder="Enter your name..." />

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="retro">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <p>Welcome to the pixel world!</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

## 🎨 Theming & Customization

- **Registry-based**: Components are copied to your project, fully customizable
- **Tailwind Compatible**: Works seamlessly with your existing Tailwind setup
- **CSS Variables**: Customize colors and styling via CSS custom properties
- **shadcn Structure**: Follow familiar shadcn/ui patterns for easy integration

### Customization Example

```tsx
import { Button } from "@/components/ui/pixelact-ui/button";

function CustomButton() {
  return (
    <Button
      variant="default"
      className="bg-red-500 hover:bg-red-600 border-red-700"
    >
      Custom Styled
    </Button>
  );
}
```

---

## 📖 Documentation

Visit our documentation for detailed usage examples and API references:

[Documentation](https://pixelactui.com/docs/installation)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a new component following our registry structure
3. **Add** documentation and examples
4. **Submit** a pull request

### Development Setup

```bash
git clone https://github.com/pixelact-ui/pixelact-ui.git
cd pixelact-ui
npm install
npm run dev
```

---

## 📄 License

MIT - feel free to use in your projects!
