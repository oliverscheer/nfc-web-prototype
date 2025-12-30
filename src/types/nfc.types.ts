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

export interface NFCData {
  serialNumber: string;
  recordType: string;
  data: string;
  timestamp: Date;
}
