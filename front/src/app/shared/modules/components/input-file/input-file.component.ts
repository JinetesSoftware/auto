import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Doc } from '../../../../core/models/Client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent {
  @Input() labelInputFile: string = 'Documentos';
  @Input() docs: Doc[] = [];
  @Output() emitDocs = new EventEmitter();
  disabledSave: boolean = true;
  doc: Doc = {
    fileName: '',
    base_doc: '',
    code: '',
    isPay: false,
    status:false
  };
  constructor(private sanitizer: DomSanitizer, private toastr: ToastrService) {}

  selectFile = (ev: any) => {
    const fileCatch = ev.target.files[0];
    let base = '';
    this.convertToBase64(fileCatch).then((file: any) => {
      if (file) {
        base = file.base;
        this.doc.fileName = fileCatch.name;
        this.doc.base_doc = base;
        this.docs.push(this.doc);
        this.doc = {
          fileName: '',
          base_doc: '',
          code: '',
          isPay: false,
          status:false,
        };
        this.emitDocs.emit(this.docs);
        return;
      }
      this.toastr.error(`Se ha producido un error al cargar el documento, ${fileCatch.name}`)
    });
    // this.disabledSave = false;
  };
  convertToBase64 = async (ev: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL(ev);
        const img = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL(ev);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
        return null;
      } catch (e) {
        return null;
      }
    });
  saveDocument = () => {};
  removeDocument = (doc: Doc) => {
    this.docs = this.docs.filter((d: Doc) => {
      return d.fileName !== doc.fileName;
    });
    this.emitDocs.emit(this.docs);
  };
  downloadPdf(base64String: string, fileName: string) {
    const source = `${base64String}`;
    const link = document.createElement('a');
    link.href = source;
    link.download = `${fileName}.pdf`;
    link.click();
  }
}
