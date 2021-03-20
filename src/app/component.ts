import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
selector: "app",
templateUrl: "template.html"
})

export class ProductComponent {
model: Model = new Model();

  getClasses(key: number) : string {
       let product: any = this.model.getProduct(key);
       let message:any = product.price < 50 ? "bg-info" : "bg-warning";
       return "p-2 " + message ;
}

getClassMap(key: number): Object {
let product: any = this.model.getProduct(key);
return {
"text-center bg-danger": product?.name === "Kayak",
"bg-info": product.price < 50 
};
}

}