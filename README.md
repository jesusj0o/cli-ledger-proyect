# BreakableToy ledger implementation 

1. Install Packages 
```sh 
npm install 
```


### How to use the commands 

Register command
```
node cli.js register --file "Bitcoin.ledger" 
```
Balance command
```
node cli.js balance --file "Bitcoin.leger"

```
Print command
```
node cli.js print --file "Bitcoin.ledger"
```

File flag is used in every command, you must to set --file or -f <path>
```
node cli.js print --file "Income.ledger"
```
Sort flag 
```
node cli.js register --sort d --file "Bitcoin.ledger" //d = sorted by date
node cli.js register --sort n --file "Bitcoin.ledger" //n = sorted by name
```


