import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Doc } from '../../../../core/models/Client';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {
@Input() labelInputFile: string = 'Documentos';
@Input() docs: Doc[] = [];
disabledSave: boolean = true;
doc:Doc = {
  fileName:'',
  base_doc:'',
  code:"",
  isPay:false

};
  constructor(private sanitizer:DomSanitizer) {}

  selectFile = (ev: any) => {
    const fileCatch = ev.target.files[0];
    let base = "";
    this.convertToBase64(fileCatch).then((file: any) => {
      if (file) {
        console.log(file);
        console.log(fileCatch);

        base = file.base;
        this.doc.fileName = fileCatch.name;
        this.doc.base_doc = base;
        this.docs.push(this.doc);
      }
    });
    this.disabledSave = false;
  };
  convertToBase64 = async (ev: any) =>    new Promise((resolve, reject) => {
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
    saveDocument = () => {

    }
    removeDocument = (doc:any) => {

    }
    downloadPdf(base64String: string, fileName: string) {
      const source = `${base64String}`;
      const link = document.createElement("a");
      link.href = source;
      link.download = `${fileName}.pdf`;
      link.click();
    }

  selectMultiFiles = () =>
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, ( input:any ) =>
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', ( e:any ) =>
		{
			var fileName = '';
			// if( .files && this.files.length > 1 )
			// 	fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			// else
			// 	fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});
}
}
