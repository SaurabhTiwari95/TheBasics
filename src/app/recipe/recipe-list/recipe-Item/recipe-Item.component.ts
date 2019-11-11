import { Component, OnInit,Input, Output } from '@angular/core';
 import { Recipe } from '../../recipe.model';
import { RecipeListComponent } from '../recipe-list.component';
import { EventEmitter } from '@angular/core';
@Component({
    selector: 'app-recipe-Item',
    templateUrl: './recipe-Item.component.html',
    styleUrls: ['./recipe-Item.component.css']
})
export class RecipeItemComponent {

    @Input() recipe: Recipe; //import from our own recipe model and we want to get this from the outside i.e. use @Input()
    /*
        @Input allows us to bind this component property from the outside and we want to bind it from our RecipeListComponent
    */
    @Output() recipeSelected = new EventEmitter<void>(); // eventEmitter does not contain any information so it is set to type void.
    /*
        @Output allows us to listen to this component from the outside
    */
    
    constructor(){  }
    
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
    onSelected(){
        this.recipeSelected.emit();
    }
}
