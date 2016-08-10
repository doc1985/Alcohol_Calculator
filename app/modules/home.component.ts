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
		console.log(this.drinkPackages);
	}

	logit() {
		console.log(this.drinkPackages);
	}
}