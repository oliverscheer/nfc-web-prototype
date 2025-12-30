// Type definitions for Web NFC API
// https://w3c.github.io/web-nfc/

interface NDEFMessageInit {
  records: NDEFRecordInit[];
}

interface NDEFRecordInit {
  recordType: string;
  mediaType?: string;
  id?: string;
  encoding?: string;
  lang?: string;
  data?: any;
}

interface NDEFReadingEvent extends Event {
  serialNumber: string;
  message: NDEFMessage;
}

interface NDEFMessage {
  records: NDEFRecord[];
}

interface NDEFRecord {
  recordType: string;
  mediaType?: string;
  id?: string;
  encoding?: string;
  lang?: string;
  data?: DataView;
  toRecords?: () => NDEFRecord[];
}

interface NDEFReader extends EventTarget {
  onreading: ((this: NDEFReader, ev: NDEFReadingEvent) => any) | null;
  onreadingerror: ((this: NDEFReader, ev: Event) => any) | null;
  scan(options?: NDEFScanOptions): Promise<void>;
  write(
    message: string | NDEFMessageInit,
    options?: NDEFWriteOptions
  ): Promise<void>;
  makeReadOnly(options?: NDEFMakeReadOnlyOptions): Promise<void>;
  addEventListener(
    type: "reading",
    listener: (this: NDEFReader, ev: NDEFReadingEvent) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: "readingerror",
    listener: (this: NDEFReader, ev: Event) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: "reading",
    listener: (this: NDEFReader, ev: NDEFReadingEvent) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: "readingerror",
    listener: (this: NDEFReader, ev: Event) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

declare var NDEFReader: {
  prototype: NDEFReader;
  new (): NDEFReader;
};

interface NDEFScanOptions {
  signal?: AbortSignal;
}

interface NDEFWriteOptions {
  overwrite?: boolean;
  signal?: AbortSignal;
}

interface NDEFMakeReadOnlyOptions {
  signal?: AbortSignal;
}

interface Window {
  NDEFReader?: typeof NDEFReader;
}
