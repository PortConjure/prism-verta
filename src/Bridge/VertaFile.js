// 
// A special file type that has member functions
// for starting the raw conversion and 
// props for storing the loading progress.
//

export class VertaFile {
  constructor(file) {
    // File Properties
    this._file = file;
    this._size = file.size;
    this.name = file.name;
    this.lastModified = file.lastModified;

    // Publishing Properties
    this.title = '';
    this.description = '';
    this.tags = '';

    // Progress Properties
    this.uploading = false;
    this.progress = 0;
    this.error = null;
    this.lastSuccess = null;
  }
  
  get size() {
    return (this._size / Math.pow(1024, 2)).toFixed(2) + 'MB';
  }
  
  get loadingProgress() {
    if (this.uploading) return `${this.progress}%`;
    if (!this.uploading && !this.lastSuccess) return 'Ready';
    if (!this.uploading && this.lastSuccess) return 'Success';
    if (!this.uploading && this.error) return this.error.toString();
    return 'Unknown';
  }
  
  upload() {
    // simulate upload
    return new Promise((resolve, reject) => {
      this.uploading = true;
      let interval = setInterval(() => {
        this.progress += 100 * Math.random() / (this._size / Math.pow(1024, 2));
        this.progress = this.progress >= 100 ? 100 : Math.round(this.progress);
        if (this.progress >= 100) {
          this.uploading = false;
          this.lastSuccess = true;
          clearInterval(interval);
          resolve(this);
        };
      }, 200);
    });
  }
}