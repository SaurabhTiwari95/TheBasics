import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe description','https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe.jpg'),
    new Recipe('A Test Recipe','This is a test recipe description','https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe.jpg'),
  ];
  /*it is an empty array*/
  /*we should define how a recipe looks like for that we should create a model(recipe.model.ts)
 so that whenever we use it in any component we are always talking about the same strusture about the same kind of object.
 For this we create a model,A model is simply a typeScript file
*/
  constructor() { }

  ngOnInit() {
  }

}
