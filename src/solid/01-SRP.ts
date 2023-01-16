(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductoService {


        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private MasterEmail: string = 'Danko@gmail.com'

        sendMail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes');
        }
    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {


        private productService: ProductoService;
        private mailer: Mailer;

        constructor(productService: ProductoService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        getProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendMail(['andres@gmail.com'], 'to-admins')
        }

    }

    class CartBloc {

        addToCart(productId: number) {
            console.log('Agregando al carrito', productId);
        }
    }

    const productService = new ProductoService()
    const mailer = new Mailer()

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();
    productBloc.getProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();