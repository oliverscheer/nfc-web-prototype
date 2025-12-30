# Komponenten-Beispiele für NFC Web Prototype

## Layout Components

### Navigation mit Hamburger-Menü

```typescript
// src/components/layout/Navigation.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/impressum", label: "Impressum" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              NFC Scanner
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(path)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Hauptmenü"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive(path)
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

### Layout Component

```typescript
// src/components/layout/Layout.tsx
import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} NFC Web Prototype
          </p>
        </div>
      </footer>
    </div>
  );
}
```

## Page Components

### Home Page

```typescript
// src/pages/HomePage.tsx
import { NFCScanner } from "../components/features/NFCScanner";

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          NFC Scanner App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Scannen Sie NFC-Tags mit Ihrem Smartphone und sehen Sie die
          gespeicherten Daten.
        </p>
      </div>
      <NFCScanner />
    </div>
  );
}
```

### Impressum Page

```typescript
// src/pages/ImpressumPage.tsx
import { Card, CardBody, CardHeader } from "../components/ui/Card";

export function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Impressum
          </h1>
        </CardHeader>
        <CardBody className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-1">
              <p>Max Mustermann</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Kontakt
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-1">
              <p>E-Mail: kontakt@beispiel.de</p>
              <p>Telefon: +49 (0) 123 456789</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Haftungsausschluss
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für
              die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
              wir jedoch keine Gewähr übernehmen.
            </p>
          </section>
        </CardBody>
      </Card>
    </div>
  );
}
```

## UI Components

### Button Component

```typescript
// src/components/ui/Button.tsx
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        sizes[size]
      } ${className} ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Laden...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
```

### Card Component

```typescript
// src/components/ui/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-md 
        border border-gray-200 dark:border-gray-700
        ${hoverable ? "hover:shadow-lg transition-shadow cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}
```

## Feature Components

### NFC Scanner Component

```typescript
// src/components/features/NFCScanner.tsx
import { useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardBody, CardHeader } from "../ui/Card";

interface NFCData {
  serialNumber: string;
  recordType: string;
  data: string;
}

export function NFCScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [nfcData, setNfcData] = useState<NFCData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async () => {
    if (!("NDEFReader" in window)) {
      setError("NFC wird von diesem Browser nicht unterstützt.");
      return;
    }

    try {
      setIsScanning(true);
      setError(null);

      const ndef = new NDEFReader();
      await ndef.scan();

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        const record = message.records[0];
        const decoder = new TextDecoder();

        setNfcData({
          serialNumber,
          recordType: record.recordType,
          data: decoder.decode(record.data),
        });
        setIsScanning(false);
      });

      ndef.addEventListener("readingerror", () => {
        setError("Fehler beim Lesen des NFC-Tags.");
        setIsScanning(false);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler");
      setIsScanning(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          NFC Scanner
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleScan}
            isLoading={isScanning}
            disabled={isScanning}
          >
            {isScanning ? "Scanne NFC-Tag..." : "Scan starten"}
          </Button>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {nfcData && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg space-y-2">
              <h3 className="font-semibold text-green-900 dark:text-green-100">
                NFC-Tag erkannt!
              </h3>
              <div className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <p>
                  <strong>Seriennummer:</strong> {nfcData.serialNumber}
                </p>
                <p>
                  <strong>Record-Typ:</strong> {nfcData.recordType}
                </p>
                <p>
                  <strong>Daten:</strong> {nfcData.data}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
```

## Custom Hooks

### useNFC Hook

```typescript
// src/hooks/useNFC.ts
import { useState, useEffect, useCallback } from "react";

interface NFCState {
  isSupported: boolean;
  isScanning: boolean;
  error: string | null;
  data: any | null;
}

export function useNFC() {
  const [state, setState] = useState<NFCState>({
    isSupported: false,
    isScanning: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isSupported: "NDEFReader" in window,
    }));
  }, []);

  const startScan = useCallback(async () => {
    if (!state.isSupported) {
      setState((prev) => ({
        ...prev,
        error: "NFC wird nicht unterstützt",
      }));
      return;
    }

    try {
      setState((prev) => ({ ...prev, isScanning: true, error: null }));

      const ndef = new NDEFReader();
      await ndef.scan();

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        setState((prev) => ({
          ...prev,
          isScanning: false,
          data: { message, serialNumber },
        }));
      });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isScanning: false,
        error: err instanceof Error ? err.message : "Unbekannter Fehler",
      }));
    }
  }, [state.isSupported]);

  const reset = useCallback(() => {
    setState((prev) => ({ ...prev, data: null, error: null }));
  }, []);

  return {
    ...state,
    startScan,
    reset,
  };
}
```

### useDarkMode Hook

```typescript
// src/hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return { isDark, toggle };
}
```

## Type Definitions

```typescript
// src/types/nfc.types.ts
export interface NFCRecord {
  recordType: string;
  mediaType?: string;
  data: ArrayBuffer;
}

export interface NFCMessage {
  records: NFCRecord[];
}

export interface NFCReadingEvent {
  message: NFCMessage;
  serialNumber: string;
}

export interface NFCErrorEvent {
  error: Error;
}

// src/types/app.types.ts
export type Theme = "light" | "dark";

export interface AppConfig {
  title: string;
  version: string;
  enableNFC: boolean;
}
```
