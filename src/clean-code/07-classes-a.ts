(() => {

    //! NO APLICANDO EL PRINCIPIO DE RESPOSABILIDAD UNICA
    type Gender = 'M' | 'F'

    class Person {

        //! MAL
        // public name: string;
        // public gender: Gender;
        // public birthdate : Date;

        // constructor(name: string, gender : Gender, birthdate : Date ) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        //. MEJOR

        //~ Principio de responsabilidad unica aplicado en SOLO esta clase
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    class User extends Person {

        public lastAccess : Date;

        constructor(
           public email: string,
           public role: string,
           name: string,
           gender: Gender,
           birthdate: Date, 
        ) {
            super(name,gender,birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date,
        ) {
            super(email,role,name,gender,birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/user/home',
        '/user/home/Downloads',
        'danko@gmail.cl',
        'admin',
        'Danko',
        'M',
        new Date('1999-10-21')

    );
    console.log({userSettings,areCredentialsValid: userSettings.checkCredentials()  });

    const newPerson = new Person('Danko','M', new Date('1999-10-21'))
    console.log(newPerson);


})();