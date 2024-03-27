import { Component } from '@angular/core';

@Component({
  selector: 'app-iphone-color',
  templateUrl: './iphone-color.component.html',
  styleUrl: './iphone-color.component.css'
})
export class IPhoneColorComponent {
  imgs: string[] = ['assets\\img\\black.jpg',
                    'assets\\img\\blue.jpg',
                    'assets\\img\\green.jpg',
                    'assets\\img\\pink.jpg',
                    'assets\\img\\yellow.jpg'];
  imgSrc: string = this.imgs[0];

  changeImg(iter:number) {
    this.imgSrc = this.imgs[iter];
  }
}
