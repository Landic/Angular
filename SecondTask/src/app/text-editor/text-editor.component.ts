import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  isBold:boolean = false;
  isItalic:boolean = false;
  isUnderline:boolean = false;
  isUpperCase:boolean = false;
  fontSize: string = '16px'; 
  fontSizes: string[] = ['12px', '16px', '20px', '24px']; 

  ChangeBold(){
     this.isBold = !this.isBold;
  }

  ChangeItalic(){
   this.isItalic = !this.isItalic;
  }
  ChangeUnderline(){
   this.isUnderline = !this.isUnderline;
  }
  ChangeUpperCase(){
   this.isUpperCase = !this.isUpperCase;
  }

  onFontSizeChange(event: any) {
    this.fontSize = event.target.value; // обновляем размер текста при изменении значения в комбобоксе
  }
}
