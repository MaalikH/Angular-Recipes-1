import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('Test Recipe', 'Simply Test', 'https://cdn3.tmbi.com/toh/GoogleImages/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg'),
		new Recipe('Test Recipe 2', 'Simply Test 2', 'https://cdn3.tmbi.com/toh/GoogleImages/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
