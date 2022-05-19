export interface Serviceability{
    pinCode:Number,
    deliveryTime:String,

  
  }
export  interface Product{
    code:Number;
    name:String;
    image:String;
    brand:String;
    price:Number;
    description:String;
    servicability:Serviceability[];
  
  }
  