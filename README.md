# near-plate-guesser

This is a guessing game done with AssemblyScript and NEAR Protocol. 
Its goal is to match given Turkish plate numbers with writing the correct cities. 

## Requirements
- Install Node.js 
- Install Yarn `npm install --global yarn` OR `npm i -g yarn`
- Install NEAR CLI `npm install --global near-cli`
- You need a NEAR Wallet. You can get a testnet wallet for free. 

## How to Run
1. Run `near login`, and login to your testnet account.
2. Clone the repo to your local folder.
3. run `yarn` to load the near-modules
4. run `./scripts/1.dev-deploy.sh`
5. Follow along with the script.
6. run  `./scripts/2.use-contract.sh`
7. Guess the city
8. Repeat steps 6-7 as long as you want or until you get bored

### Methods

`function  fillVector(): PersistentVector<string>`
This function fills a PersistentVector with 9 items. Currently these items are manually inserted to the PV for the demo's sake, but this will be a JSON object that the program copies from.

`function  emptyVector(): PersistentVector<string>`
emptyVector() cycles through all the items and uses the .pop() method, empties the whole vector. 
Note: You might need to run this function to cleanup every item. 

`function  randomPlateNumber(): string`
This function gives us a number between 1 and max size of our Vector. (which is currently 9) It prints out the number and asks the question.

`function  guessThePlate(answer: string): string`
This function takes your answer and compares with the value in the vector. If it is true, it gives a correct statement, if it is incorrect it will say that you are incorrect. 

## TODO LIST
- Frontend
- Transaction of money(like a betting pool)