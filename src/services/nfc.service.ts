import type { NFCData } from "../types/nfc.types";

export class NFCService {
  private reader: NDEFReader | null = null;

  /**
   * Prüft, ob der Browser NFC unterstützt
   */
  async isSupported(): Promise<boolean> {
    return "NDEFReader" in window;
  }

  /**
   * Startet den NFC-Scan
   * @returns Promise mit den gescannten NFC-Daten
   */
  async scan(): Promise<NFCData> {
    if (!(await this.isSupported())) {
      throw new Error("NFC wird von diesem Browser nicht unterstützt");
    }

    try {
      this.reader = new NDEFReader();
      await this.reader.scan();

      return new Promise((resolve, reject) => {
        if (!this.reader) {
          reject(new Error("NFC Reader nicht initialisiert"));
          return;
        }

        this.reader.addEventListener(
          "reading",
          ({ message, serialNumber }: any) => {
            try {
              const record = message.records[0];
              const decoder = new TextDecoder();
              const data = decoder.decode(record.data);

              resolve({
                serialNumber,
                recordType: record.recordType,
                data,
                timestamp: new Date(),
              });
            } catch (error) {
              reject(new Error("Fehler beim Decodieren der NFC-Daten"));
            }
          }
        );

        this.reader.addEventListener("readingerror", () => {
          reject(new Error("Fehler beim Lesen des NFC-Tags"));
        });
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`NFC Scan fehlgeschlagen: ${error.message}`);
      }
      throw new Error("Unbekannter Fehler beim NFC-Scan");
    }
  }

  /**
   * Stoppt den aktuellen NFC-Scan
   */
  stopScan(): void {
    this.reader = null;
  }
}

// Singleton-Instanz exportieren
export const nfcService = new NFCService();
