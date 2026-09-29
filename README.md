<!-- SEO Optimized Header -->
# 📅 DatePicker - Modern React Date Picker Component

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@mehedi-codes/datepicker.svg)](https://www.npmjs.com/package/@mehedi-codes/datepicker)
[![React Version](https://img.shields.io/badge/react-18%2B-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0%2B-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/bun-1.0%2B-black.svg)](https://bun.sh/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.0%2B-06b6d4.svg)](https://tailwindcss.com/)

**A sleek, modern, and highly customizable React date picker component** built with TypeScript, Bun, and Tailwind CSS v4. Perfect for React applications requiring elegant date selection UI.

[🌐 Live Demo](https://datepicker.mehedi-codes.com) | [📚 Documentation](#documentation) | [💻 GitHub](https://github.com/mehedi-codes/datepicker) | [📦 NPM](https://www.npmjs.com/package/@mehedi-codes/datepicker)

---

## ✨ Features

- 🎨 **Fully Customizable** - Customize colors, styles, and behavior with Tailwind CSS
- ♿ **Accessible** - Built with Radix UI for WCAG compliance
- 📱 **Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎯 **Type-Safe** - Full TypeScript support with strict mode
- ⚡ **Lightweight** - Minimal dependencies, tree-shakeable
- 🌙 **Dark Mode Ready** - Easy theme switching with Tailwind
- 📦 **ESM Module** - Native ES modules with Bun compatibility
- 🧪 **Production Ready** - Fully tested and optimized

---

## 📦 Installation

### Using Bun
```bash
bun add @mehedi-codes/datepicker
```

### Using NPM
```bash
npm install @mehedi-codes/datepicker
```

### Using Yarn
```bash
yarn add @mehedi-codes/datepicker
```

### Using PNPM
```bash
pnpm add @mehedi-codes/datepicker
```

---

## 🚀 Quick Start

### Basic Usage

```tsx
import { DatePicker } from '@mehedi-codes/datepicker';

export default function App() {
  return <DatePicker />;
}
```

### With State Management

```tsx
import { useState } from 'react';
import { DatePicker } from '@mehedi-codes/datepicker';

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      <DatePicker value={selectedDate} onChange={setSelectedDate} />
      <p>Selected: {selectedDate?.toLocaleDateString()}</p>
    </div>
  );
}
```

### Custom Date Range

```tsx
import { DatePicker } from '@mehedi-codes/datepicker';
import { startOfYear, endOfYear } from 'date-fns';

export default function App() {
  return (
    <DatePicker 
      minDate={startOfYear(new Date())}
      maxDate={endOfYear(new Date())}
      placeholder="Select date within this year"
    />
  );
}
```

---

## 🎯 Props & API

### DatePickerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date \| null` | `null` | The selected date |
| `onChange` | `(date: Date \| null) => void` | - | Callback when date changes |
| `disabled` | `boolean` | `false` | Disable the date picker |
| `placeholder` | `string` | "Pick a date" | Placeholder text |
| `format` | `string` | "PPP" | Date format (date-fns format string) |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |
| `className` | `string` | - | Additional CSS classes |
| `clearable` | `boolean` | `true` | Show clear button |
| `inline` | `boolean` | `false` | Inline calendar display |

---

## 🎨 Styling & Customization

### With Tailwind CSS

The component uses Tailwind CSS v4 and works seamlessly with your existing styles:

```tsx
<DatePicker 
  className="border-2 border-blue-500 rounded-lg shadow-lg"
  placeholder="Pick your date"
/>
```

### Custom Themes

```tsx
import { DatePicker } from '@mehedi-codes/datepicker';

export default function DarkModeExample() {
  return (
    <div className="dark">
      <DatePicker className="dark:bg-slate-900 dark:text-white" />
    </div>
  );
}
```

### Date Format Options

Using date-fns format strings:

```tsx
// PPP - Jan 1, 2024
<DatePicker format="PPP" />

// MM/dd/yyyy - 01/01/2024
<DatePicker format="MM/dd/yyyy" />

// EEEE, MMMM d, yyyy - Monday, January 1, 2024
<DatePicker format="EEEE, MMMM d, yyyy" />

// yyyy-MM-dd - 2024-01-01
<DatePicker format="yyyy-MM-dd" />
```

---

## 🌍 Browser Support

| Browser | Versions |
|---------|----------|
| Chrome | Latest 2 |
| Firefox | Latest 2 |
| Safari | Latest 2 |
| Edge | Latest 2 |

---

## 📚 Development

### Setup with Bun

```bash
git clone https://github.com/mehedi-codes/datepicker.git
cd datepicker
bun install
```

### Development Server

```bash
bun run dev
```

Opens [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
bun run build
```

### Type Checking

```bash
bun run type-check
```

### Linting

```bash
bun run lint
```

### Format Code

```bash
bun run format
```

---

## 🏗️ Project Structure

```
datepicker/
├── src/
│   ├── components/
│   │   ├── DatePicker.tsx      # Main component
│   │   └── Calendar.tsx         # Calendar view component
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── index.css                # Tailwind CSS v4 entry
│   ├── index.ts                 # Public API
│   └── main.tsx                 # Demo app
├── dist/                        # Built files (generated)
├── public/                      # Static files
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── netlify.toml                 # Netlify deployment config
└── README.md                    # This file
```

---

## 📦 Dependencies

### Runtime
- **React** (18.3+) - UI library
- **date-fns** (3.6+) - Date utilities
- **@radix-ui/react-popover** - Accessible popover component
- **@radix-ui/react-icons** - Icon library

### Build & Dev
- **Bun** (1.0+) - Fast JavaScript runtime & package manager
- **Vite** (5.0+) - Next generation frontend tooling
- **TypeScript** (5.3+) - Type safety
- **Tailwind CSS** (4.0+) - Utility-first CSS
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🔒 Security

- ✅ No external API calls
- ✅ Safe date handling with date-fns
- ✅ XSS protection through React
- ✅ Regular dependency updates
- ✅ TypeScript strict mode for type safety

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Standards
- Use TypeScript (strict mode)
- Follow existing code patterns
- Add tests for new features
- Update documentation
- Run `bun run lint` and `bun run format` before committing

---

## 📄 License

This project is licensed under the **ISC License** - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mehedi Codes**
- [GitHub](https://github.com/mehedi-codes)
- [Portfolio](https://mehedi-codes.com)

---

## 📞 Support & Community

- 📖 [Documentation](#-quick-start)
- 🐛 [Report Issues](https://github.com/mehedi-codes/datepicker/issues)
- 💬 [Discussions](https://github.com/mehedi-codes/datepicker/discussions)

---

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `bun run build`
3. Publish directory: `dist`
4. Deploy!

### Manual Deployment

```bash
# Build
bun run build

# Deploy dist/ folder to your hosting provider
```

---

## ⭐ Acknowledgments

Built with:
- [React](https://react.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [date-fns](https://date-fns.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh/)

---

## 📊 Keywords for SEO

React date picker, JavaScript calendar component, TypeScript datepicker, customizable calendar UI, React calendar component, date selection component, Tailwind CSS date picker, Bun package manager, Vite React, accessible date picker, WCAG compliant calendar, modern date picker

---

**⭐ Star us on [GitHub](https://github.com/mehedi-codes/datepicker)!**
