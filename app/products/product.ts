
module app.domain {
    export interface IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releasedDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        calculateDiscount(percent: number) : number;
    }

    export class Product implements IProduct {       

        constructor(public productId: number,
            public productName: string,
            public productCode: string,
            public releasedDate: Date,
            public price: number,
            public description: string,
            public imageUrl: string) {

        }

        calculateDiscount(percent: number): number {
            return this.price - (this.price * percent / 100);
        }

    }
}