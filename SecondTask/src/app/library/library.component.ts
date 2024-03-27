import { Component } from '@angular/core';
import { library } from '../library';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  librarys = library;
  librarys_obj:any = library[0];

  onSelect(item:Object) {
    this.librarys_obj = item;
  }
}
