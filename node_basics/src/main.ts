type Identification = number | string;

type Developer = {
    id : Identification,
    hiring_date : Date | string,
    salary : number
};

type Supervisor = Developer & { subordinates : Identification[] };

const developer1ID : Identification = 12345;

const developer2ID : Identification = '12346';

const developer1 : Developer = {
    id : developer1ID,
    hiring_date : '12-08-2021',
    salary : 500000
};

const developer2 : Developer = {
    id : developer2ID,
    hiring_date : new Date('03/25/2020'),
    salary : 1250000
};

const supervisor1 : Supervisor = {
    id : 12347,
    hiring_date : '03/25/2015',
    salary : 1400000,
    subordinates: [ developer1ID, developer2ID]
};


function payToEmployee(employee: Developer | Supervisor) {
    
    console.log( 'Se pagó ' + employee.salary + ' al empleado ' + employee.id );
    
    if(employee.hasOwnProperty('subordinates')){
        console.log('El empleado tiene '+(employee as Supervisor).subordinates.length
        +' subalternos');
    }
}

// No funciona
const payToEmployee2 = (employee: Developer | Supervisor): string => {
    
    let response = '';

    response += 'Se pagó ' + employee.salary + ' al empleado ' + employee.id;
    
    if(employee.hasOwnProperty('subordinates')){
        response += 'El empleado tiene '+(employee as Supervisor).subordinates.length
        +' subalternos';
    }

    return response;
}

// Tampoco funciona
function payToEmployee3(employee: Developer | Supervisor, 
    countSubordinates: (employee: Supervisor) => string) 
{

    console.log( 'Se pagó ' + employee.salary + ' al empleado ' + employee.id );
    
    if(employee.hasOwnProperty('subordinates')){
        console.log(countSubordinates(employee as Supervisor));
    }
}

const countSubordinates = function(employee: Supervisor) {
    return 'El empleado tiene '+ employee.subordinates.length
    +' subalternos';
}

payToEmployee(developer1);
console.log(payToEmployee2(developer2));
payToEmployee3(supervisor1, countSubordinates);