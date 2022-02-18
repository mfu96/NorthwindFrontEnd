// Java dünyasında interface'lerin önüne I konulmaz fakat kod okunurluğu için 
// düşünürsek Allah'ın emri değil
export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}