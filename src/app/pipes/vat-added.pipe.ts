//Pipe sana gelen bir veriyi farklı şekilde yansıtma işine yarar
//Örneğin küçük gelen bir yazıyı büyütebilirsin
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'  //vat=KDV
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number ): number {        //rate=oran
    return value + (value*18/100);
  }

}
