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
node cli.js register --sort date --file "Bitcoin.ledger" //date = sorted by date
node cli.js register --sort name --file "Bitcoin.ledger" //nname = sorted by description
```


unfinished flags: --price-db
because I didn't do enough research on how it works, I left this feature at the end and didn't have enough time to implement it. 