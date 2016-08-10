import { DrinkSize } from './DrinkSize';


export class DrinkPackage {
  drinkType: string;	
  numberOfPeople: number;
  drinksPerPerson: number;
  pricePerDrinkPackage: number;
  drinkSize: DrinkSize;
  packageSize: DrinkSize;

  constructor(drinkType: string, numberOfPeople: number, drinksPersPerson: number, 
  	pricePerDrinkPackage: number, drinkSize: DrinkSize, packageSize: DrinkSize) {
  	this.drinkType = drinkType;
  	this.numberOfPeople = numberOfPeople;
  	this.drinksPerPerson = drinksPersPerson;
  	this.pricePerDrinkPackage = pricePerDrinkPackage;
  	this.drinkSize = drinkSize;
  	this.packageSize = packageSize;
  }

  getDrinkType() {
  	return this.drinkType;
  }

  getNumberOfPeople() {
  	return this.numberOfPeople;
  }

  getDrinksPerPerson() {
  	return this.drinksPerPerson;
  }

  getPricePerDrinkPackage() {
  	return this.pricePerDrinkPackage;
  }

  getDrinkSize() {
  	return this.drinkSize;
  }

  getPackageSize() {
  	return this.packageSize;
  }
}