const program = require('commander');
var sprintf = require("sprintf-js").sprintf;

program.version('0.0.1');


// COMMANDS

//REGISTER COMMAND
program
.command('register')
.alias('reg')
.description('List all postings matching the report-query. ')
.action(function() {
    if(FileExist()) {
        const Register = require("./Register");
        Register(array_transactions,program.sort);
    }
})
//BALANCE COMMAND
program
.command('balance [arg...]')
.alias('bal')
.description('Print a balance report')
.action(function (arg) {
    if(FileExist()) {
        const Balance = require("./Balance");
        Balance(array_transactions,arg);
    }
})
//PRINT COMMAND
program
.command('print')
.alias('p')
.description('Print out transactions')
.action(function () {
    if(FileExist()) {
        const Print = require("./Print");
        Print(array_transactions,program.sort);
    }

})
// FLAGS
program
.option('--price-db <path>', '')
.action()

//FILE FLAG
program
.option('-f, --file <path>')
.action()

//SORT FLAG
program
.option('-s, --sort <path>')
.action()


program.parse(process.argv);


function FileExist(){    
    if (program.file) {
        const parser = require("./Parser");
        if (program.file == "index.ledger"){ 
            
            array_transactions = parser("Income.ledger");
            console.log(array_transactions);
            
            array_transactions2 = parser("Payable.ledger");
            console.log(array_transactions2);
            
            return array_transactions

        } else {
            array_transactions = parser(program.file);
            
            return array_transactions
        }
    } else {
        console.log("ERROR: No file was specified (please use --file or -f) ");   
        return false;
    }    
}

