import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature ="recipe"; //this shows which feature should be displayed recipe or the shopping-list
  
  onNavigate(feature:string){
      this.loadedfeature = feature;
  }

}
