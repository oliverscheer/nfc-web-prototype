import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Card, CardBody, CardHeader } from '../ui/Card';
import { nfcService } from '../../services/nfc.service';
import type { NFCData } from '../../types/nfc.types';

export function NFCScanner() {
    const [isScanning, setIsScanning] = useState(false);
    const [nfcData, setNfcData] = useState<NFCData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        // Prüfe NFC-Unterstützung beim Laden der Komponente
        nfcService.isSupported().then(setIsSupported);
    }, []);

    const handleScan = async () => {
        try {
            setIsScanning(true);
            setError(null);
            setNfcData(null);

            const data = await nfcService.scan();
            setNfcData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
        } finally {
            setIsScanning(false);
        }
    };

    const handleReset = () => {
        setNfcData(null);
        setError(null);
        nfcService.stopScan();
    };

    if (!isSupported) {
        return (
            <Card className="max-w-md mx-auto">
                <CardBody>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                                    NFC nicht verfügbar
                                </h3>
                                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                                    <p>Ihr Browser oder Gerät unterstützt kein NFC.</p>
                                    <p className="mt-1">Bitte verwenden Sie ein Gerät mit NFC-Unterstützung und einen kompatiblen Browser (z.B. Chrome auf Android).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    NFC Scanner
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Halten Sie Ihr Gerät an einen NFC-Tag
                </p>
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
                        {isScanning ? 'Scanne NFC-Tag...' : 'Scan starten'}
                    </Button>

                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                                        Fehler
                                    </h3>
                                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {nfcData && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg space-y-3">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3 flex-1">
                                    <h3 className="text-sm font-medium text-green-800 dark:text-green-100">
                                        NFC-Tag erfolgreich gescannt!
                                    </h3>
                                </div>
                            </div>

                            <div className="text-sm text-green-800 dark:text-green-200 space-y-2">
                                <div className="bg-white dark:bg-gray-800 rounded p-3 space-y-2">
                                    <div>
                                        <span className="font-semibold">Seriennummer:</span>
                                        <p className="font-mono text-xs mt-1 break-all">{nfcData.serialNumber}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Record-Typ:</span>
                                        <p className="mt-1">{nfcData.recordType}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Daten:</span>
                                        <p className="mt-1 break-words">{nfcData.data}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Zeitstempel:</span>
                                        <p className="mt-1 text-xs">{nfcData.timestamp.toLocaleString('de-DE')}</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="secondary"
                                size="sm"
                                className="w-full mt-2"
                                onClick={handleReset}
                            >
                                Neuen Scan starten
                            </Button>
                        </div>
                    )}

                    {isScanning && (
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                                Bitte halten Sie Ihr Gerät an den NFC-Tag...
                            </p>
                        </div>
                    )}
                </div>
            </CardBody>
        </Card>
    );
}
