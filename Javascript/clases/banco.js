// https://github.com/fedm4/js-course

// Ejercicio: 

/* -------------------------------
Escribir dos clases derivadas que sean 
1. SavingsAccount (Caja de ahorro)
    - Deberia tener una propiedad "interest" (interes, en porcentaje).
    - Deberia tener ademas, un metodo que sume ese interes al balance de la cuenta.
    - No deberia permitirme retirar mas de lo que tengo disponible en mi balance.
2. CurrentAccount (cuenta corriente)
Crear una clase Bank (banco). El objeto resultante deberia contener 
un array de Accounts. Las instancias dentro de este array pueden ser 
de Account, SavingsAccount o CurrentAccount. Crear varios ejemplos para testear.

Escribir un metodo "update" dentro de Bank para iterar por CADA 
cuenta del array, actualizandolas de la siguiente forma:
    - A SavingsAccount se le suma el interes. 
    - A CurrentAccount se le "envia una carta" (loogeo un mensaje), si estan en 
    numeros negativos. 
Bank deberia tener metodos para abrir y cerrar cuentas, y pagar un 
dividendo a cada cuenta (Sumar al balance).
*/

class Account {
    constructor(titular, accountNumber) {  
        this.titular = titular;  
        this.balance = 0.0;
        this.accountNumber = accountNumber;
    };
    deposit(sum) {
      if (sum < 0) throw new Error("No se puede hacer deposito negativo.");
      this.balance += sum;
    };
    withdraw(sum) {
      if (sum < 0) throw new Error("No se puede retirar una cantidad negativa.");
      this.balance -= sum;
    };
    toString() {
	    return "Acc " + this.accountNumber + ": " + "balance = " + this.balance;    
    };
};

class SavingsAccount extends Account {
    constructor(titular, accountNumber, interest) {
        super(titular, accountNumber);
        this.interest = interest;
    };
    sumarInteres() {
        this.balance = this.balance * (1 + (this.interest / 100));
    };
    withdraw(sum) {
        if (this.balance < sum) throw new Error("No tienes los fondos suficientes.");
        super.withdraw(sum);
    };
};

class CurrentAccount extends Account {
    constructor(titular, accountNumber) {
        super(titular, accountNumber);
    };
};

class Bank {
    array = [];
    static get tipoDeCuenta () {
        return {
            account: 1,
            savingsAccount: 2,
            currentAccount: 3,
        };
    };
    buscar(titular, nCuenta) {
        const index = this.array.findIndex(lista => lista.titular === titular && lista.accountNumber === nCuenta);
        if (index === -1) throw new Error("La cuenta no existe.");
        return {
            index,
            account: this.array[index]
        };
    };
    agregar(account) {
        if(!(account instanceof Account)) throw new Error("Debe ser instancia de Account");
        this.array.push(account);
    };
    deposit(titular, nCuenta, sum) {
        const {account} = this.buscar(titular, nCuenta);
        account.balance += sum;
        // antes: savings.deposit(sum);
    };
    withdraw(titular, nCuenta, sum) {
        const {account} = this.buscar(titular, nCuenta);
        if(account instanceof SavingsAccount) {
            if(sum < account.balance) {
                account.balance -= sum;
                // antes: savings.withdraw(sum);
            } else {
                console.log("No tienes los fondos suficientes!")
            }
        } else if(account instanceof CurrentAccount) {
            account.balance -= sum;
        }
    };
    update() { // tambien con map
        this.array.forEach(lista => {
            if(lista instanceof SavingsAccount) {
                lista.balance = lista.balance * (1 + (lista.interest / 100));
                console.log("Estado de cuenta disponible.")
                // antes: savings.sumarInteres()
            } else if(lista instanceof CurrentAccount) {
                if(lista.balance < 0) {
                    console.log("Balance cuenta corriente esta en negativo.");
                };
            }; 
        });
    };
    open(account, dividendo) {
        const buscar = this.array.findIndex(lista => lista.accountNumber === account.accountNumber);
        if(buscar !== -1) throw new Error("El número de cuenta ya existe.");
        if (!(account instanceof Account)) throw new Error("No corresponde a ninguna instancia existente.");        
            account.balance += dividendo;
            console.log(`${account.titular} abre cuenta n ${account.accountNumber}. Su balance es de: ${account.balance}, gracias a los dividendos.`);
            this.array.push(account);
    };
    close(titular, nCuenta, dividendo) {
        const {account} = this.buscar(titular, nCuenta);
        account.balance += dividendo;
        console.log(`Cerrar cuenta n ${account.accountNumber}. Se le entrega a ${account.titular} un monto de ${account.balance} que incluye los dividendos.`);
        this.array.splice(account, 1);
    };
};


// --------------------- Fede - version

class Account {
    constructor(accountNumber) {    
        this.balance = 0.0;
        this.accountNumber = accountNumber;
    };
    deposit(sum) {
        if (sum < 0) throw new Error("No se puede hacer deposito negativo.");
        this.balance += sum;
    }; 
    withdraw(sum) {
        if (sum < 0) throw new Error("No se puede retirar una cantidad negativa.");
        this.balance -= sum;
    };
    toString() {
        return "Acc " + this.accountNumber + ": " + "balance = " + this.balance;    
    };
};
  
class SavingsAccount extends Account {
    constructor(interest, accountNumber) {
        super(accountNumber);
        this.interest = interest;
    };
    withdraw(sum) {
        if(this.balance < sum) throw new Error("No hay saldo suficiente.");
        super.withdraw(sum);
    };
    sumarInteres() {
        this.balance = this.balance * (1 + (this.interest / 100));
    };
};
  
class CurrentAccount extends Account {
    constructor(accountNumber) {
        super(accountNumber);
    };
    sendNegativeBalanceEmail() {
        console.warn(`El saldo actual es de ${this.balance}, por favor, paganos. Tipo ya.`)
    };
};
  
class Bank {
    accounts = [];
    interestRate = 10;
    _nextAccountNumber = 0;  
    constructor(name) {
        this.name = name;
    };
    get nextAccountNumber() {
        return this._nextAccountNumber++;
    };
    buscarCuentaPorNumero(accountNumber) {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);
        if (index === -1) throw new Error("La cuenta no existe.");
        return {
            index,
            account: this.accounts[index]
        };
    };
    agregarCuenta(account) {
        if(!(account instanceof Account)) throw new Error("Debe ser instancia de Account");
        this.accounts.push(account);
    };
    eliminarCuenta(accountNumber) {
        const {index} = this.buscarCuentaPorNumero(accountNumber);
        // lo mismo que hacer
        /**
        * const objRet = this.buscarCuentaPorNumero(accountNumber);
        * const index = objRet.index;
        */
      this.accounts.splice(index, 1);
    };
    actualizacionMensual() {
        this.accounts = this.accounts.map(account => {
            if(account instanceof SavingsAccount) {
                account.sumarInteres();
            } else if(account instanceof CurrentAccount && account.balance < 0) {
                account.sendNegativeBalanceEmail();
            }
            return account;
        });
    };
};
  
const bancada = new Bank("Bancada");
  
const crearNuevaCuentaDeAhorro = banco => {
    console.log(banco);
    const cuenta = new SavingsAccount(banco.interestRate, banco.nextAccountNumber);
    banco.agregarCuenta(cuenta);
    return cuenta;
}
const miCuentaNueva = crearNuevaCuentaDeAhorro(bancada);
  
const {account}  = bancada.buscarCuentaPorNumero();
    account.deposit(4500);
    bancada.saveAccountChanges(account);



/*

agregar(tipoDeCuenta, titular, accountNumber, interest) {
    const buscar = this.array.findIndex(lista => lista.accountNumber === accountNumber);
    if(buscar !== -1) throw new Error("El número de cuenta ya existe.");
    switch(tipoDeCuenta) {
        case Bank.tipoDeCuenta.account:
            const account = new Account(titular, accountNumber);
                return this.array.push(account);
        case Bank.tipoDeCuenta.savingsAccount:
            const savings = new SavingsAccount(titular, accountNumber, interest);
                return this.array.push(savings);
        case Bank.tipoDeCuenta.currentAccount:
            const current = new CurrentAccount(titular, accountNumber);
                return this.array.push(current);
    };
};

*/