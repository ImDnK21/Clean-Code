(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes extends HtmlElement {
        constructor(
            public value: string,
            public placeholder: string,
            id: string,
        ) {
            super(id, 'input');
        }
    }

    class InputEvents extends InputAttributes {
        constructor( value: string, placeholder: string, id: string ) {
            super( value, placeholder, id );
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElements extends HtmlElement {
        constructor(
            id: string,
            type: HtmlType,
        ) {
            super(id, type);
        }
        

    }

    //? Idea para la nueva clase InputElement

    const nameField2 = new InputElements('Danko','radio');
    const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    console.log({ nameField2 });
    console.log({ nameField });
    console.log('hola');

})()