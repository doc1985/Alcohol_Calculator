import { DrinkSize } from './DrinkSize';


export class DrinkPackage {
  drinkType: string;	
  numberOfPeople: number;
  drinksPerPerson: number;
  pricePerDrinkPackage: number;
  drinkSize: DrinkSize;
  packageSize: DrinkSize;
  packageCost: number;
  unitsNeeded: number;

  constructor(drinkType: string, numberOfPeople: number, drinksPersPerson: number, 
  	pricePerDrinkPackage: number, drinkSize: DrinkSize, packageSize: DrinkSize, packageCost: number, 
    unitsNeeded: number) {
  	this.drinkType = drinkType;
  	this.numberOfPeople = numberOfPeople;
  	this.drinksPerPerson = drinksPersPerson;
  	this.pricePerDrinkPackage = pricePerDrinkPackage;
  	this.drinkSize = drinkSize;
  	this.packageSize = packageSize;
    this.packageCost = packageCost;
    this.unitsNeeded = unitsNeeded;
  }

}