(() => {

    // función para obtener información de una película por Id
    function getAllMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActorsByIdMovie( idMovie: string ) {
        console.log({ idMovie });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName:string) {
        console.log({fullName});
        return true
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor');
        return true;        

    }

    //. Continuacion
    //~ Se puede refactorizar

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
        let result: number;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    //~ Refactorizado y mas legible

    const getPayAmountRefactorized = ({isDead = false, isSeparated = true, isRetired = false}) : number => {
        if (isDead ) return 1500;

        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;

    }
    


})();