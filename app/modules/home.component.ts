import { Component, OnInit } from '@angular/core';
import { DrinkPackageService } from '../services/DrinkPackage.service';
import { DrinkPackage } from '../models/DrinkPackage';

@Component({
  selector: 'app-home',
  templateUrl: 'app/modules/home.component.html',
  providers: [DrinkPackageService]
})

export class HomeComponent implements OnInit{ 
	
	drinkPackages: DrinkPackage[];
	test: string;

	constructor(private drinkPackageService: DrinkPackageService){}

	getDrinkPackages() {
		this.drinkPackages = this.drinkPackageService.getPresetPackages();
	}

	ngOnInit(){
		this.getDrinkPackages();
		this.calculateTotals();
	}

	calculateTotals(){
		for(let drinkPackage of this.drinkPackages){
			drinkPackage.unitsNeeded = drinkPackage.drinksPerPerson * 2
		}
	}

	logit() {
		console.log(this.drinkPackages);
	}
}