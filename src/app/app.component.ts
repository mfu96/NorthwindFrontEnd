import { Component } from '@angular/core';

//Component html datasını yönettiğimiz yere denir
//Böyle bi duruma ihtiyaç sebebi html'in dianmik bir yapısı olmayışıdır

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  //16. gün 1.30'da anlatıyor
})
//Class'ın kendisi AppComponent- Attribute'u ise @ ile başlayan kısım
//JavaScript'de süslü parantez, obje demek(ör User,Product)
export class AppComponent {
  title = 'northwind';
  user: string = 'Muhammed Furkan USLU';

}
