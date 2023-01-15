type Size = 'S' | 'M' | 'L' | 'XL';
class Product {
    constructor(
        public name: string,
        public price: number,
        public size: Size,
    ){}

    isProductoReady() :boolean{
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error (`${key} is empty`);
                break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error (`${key} is zero`);
                default:
                    throw Error (`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString() {
        if (!this.isProductoReady)
        return `${ this.name} (${this.price}) , ${this.size} `
    }
}

(()=> {

    const bluePants = new Product('Blue Pants', 0, 'L');
    console.log(bluePants.toString);

    
})();