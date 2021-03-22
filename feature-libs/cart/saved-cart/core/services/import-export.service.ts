import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImportExportService {
  constructor() {}
  // size is in MB
  maxSize = 1;
  allowedExtensions = ['text/csv'];

  importFile(selectedFile: FileList) {
    const file: File = selectedFile.item(0) as File;
    if (this.isFileValid(file)) {
      return new Promise((resolve, reject) => {
        const reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reader.abort();
          reject(new DOMException('Could not parse the file'));
        };
      });
    } else {
      throw console.error('file is not valid');
    }
  }

  private isFileValid(file: File): Boolean {
    return file.size / 1000000 <= this.maxSize &&
      this.allowedExtensions.includes(file.type) &&
      file.size !== 0
      ? true
      : false;
  }
}
