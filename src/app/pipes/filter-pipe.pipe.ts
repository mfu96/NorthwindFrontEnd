import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
            //value Değiştirmek istediğimiz değer
            //filterText girilen parametre
            //Product[] dönüş tipi
  transform(value:Product[],filterText:string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;
  }

}
