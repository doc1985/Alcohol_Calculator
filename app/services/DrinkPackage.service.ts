import { Injectable } from '@angular/core';
import { DrinkPackage } from '../models/DrinkPackage';
import { DrinkSize } from '../models/DrinkSize';


@Injectable()
export class DrinkPackageService {

	//get all patients
	getPresetPackages(){
		var drinkPackages = [
			new DrinkPackage("Beer",5,5,5,new DrinkSize("name1",2),new DrinkSize("name2",4))
		];
		return drinkPackages;
	}
}