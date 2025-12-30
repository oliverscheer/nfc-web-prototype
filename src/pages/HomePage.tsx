import { NFCScanner } from '../components/features/NFCScanner';

export function HomePage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    NFC Scanner App
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Scannen Sie NFC-Tags mit Ihrem Smartphone und sehen Sie die gespeicherten Daten.
                </p>
            </div>
            <NFCScanner />
        </div>
    );
}
