import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { DatePicker } from './index';
import './index.css';

function App() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">📅 DatePicker</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A sleek, modern, and highly customizable React date picker component
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/mehedi-codes/datepicker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@mehedi-codes/datepicker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              NPM Package
            </a>
          </div>
        </div>

        {/* Demo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Basic Demo */}
          <div className="bg-background rounded-lg p-8 border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Basic Usage</h2>
            <div className="space-y-4">
              <DatePicker
                value={date}
                onChange={setDate}
                placeholder="Select a date"
              />
              {date && (
                <div className="p-4 bg-accent/10 border border-accent rounded-lg">
                  <p className="text-sm text-muted-foreground">Selected Date:</p>
                  <p className="text-lg font-semibold text-foreground">
                    {date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="bg-background rounded-lg p-8 border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✨</span>
                <span className="text-foreground">Fully Customizable</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">♿</span>
                <span className="text-foreground">Accessible (WCAG)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">📱</span>
                <span className="text-foreground">Responsive Design</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">🎯</span>
                <span className="text-foreground">TypeScript Support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">⚡</span>
                <span className="text-foreground">Lightweight & Fast</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">🌙</span>
                <span className="text-foreground">Dark Mode Ready</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Installation Section */}
        <div className="mt-12 bg-background rounded-lg p-8 border border-border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Installation</h2>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>bun add @mehedi-codes/datepicker</pre>
          </div>
          <p className="text-muted-foreground mt-4">
            Available on NPM, Yarn, PNPM, and Bun package managers.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p>Built with React, TypeScript, Tailwind CSS, and Bun</p>
          <p className="mt-2">
            © 2024 Mehedi Codes • Open Source • ISC License
          </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
