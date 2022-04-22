import { storage, logging, PersistentVector, RNG, context } from "near-sdk-as";

// --- contract code goes below


let plates = new PersistentVector<string>("p");

export function fillVector() : PersistentVector<string>{
    if (plates.isEmpty) {
        plates.push("Adana");
        plates.push("Adıyaman");
        plates.push("Afyon");
        plates.push("Ağrı");
        plates.push("Amasya");
        plates.push("Ankara");
        plates.push("Antalya");
        plates.push("Artvin");
        plates.push("Aydın");               
    }
    return plates;
} 


export function emptyVector() : PersistentVector<string>{
    for (let i : i32 = 0; i < plates.length; i++) plates.pop();

    return plates;
} 

/* export function printVector() : void { 
    assert(!plates.isEmpty, "Vector is Empty")  
    for (let i= 0; i < plates.length; ++i) logging.log(plates[i]);
    
} */

export function randomPlateNumber() : string {
  
    const SIZE = plates.length;
    const rng = new RNG<u32>(1, SIZE);
    const roll = rng.next();
    //storage set
    storage.set<i32>('num', <i32>roll);
    return "What is the name of the city with the Plate Number 0"+ (roll+1).toString();
}

export function guessThePlate(answer : string) : string{

  
  if(answer == plates[ storage.getPrimitive<i32>('num',0)]){
    return context.sender +" is Correct";
  }else{
    return  context.sender +" is Wrong";    
  }

}