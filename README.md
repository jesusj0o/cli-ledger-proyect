# BreakableToy ledger implementation 

1. Install Packages 
```sh 
npm install 
```


### How to use the commands 
```
node cli.js register --file "Bitcoin.ledger" 
node cli.js register --sort d --file "Bitcoin.ledger" //d = sorted by date
node cli.js register --sort n --file "Bitcoin.ledger" //n = sorted by name
node cli.js balance --file "Bitcoin.leger"
node cli.js print --file "Bitcoin.ledger"

```