import { Card, CardBody, CardHeader } from '../components/ui/Card';

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
                            Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt.
                            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                            können wir jedoch keine Gewähr übernehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Datenschutz
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Diese Anwendung verarbeitet NFC-Daten ausschließlich lokal in Ihrem Browser.
                            Es werden keine Daten an externe Server übertragen oder gespeichert.
                        </p>
                    </section>
                </CardBody>
            </Card>
        </div>
    );
}
