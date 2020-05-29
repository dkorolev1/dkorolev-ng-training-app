import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.mdule';
import { RecipesComponent } from './recipes.component';
import { RecipesRountingModule } from './recipes.routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipeDetailComponent
    ],
    imports: [
        // ng
        RouterModule,
        ReactiveFormsModule,
        // shared 
        SharedModule,
        // routing
        RecipesRountingModule
    ]
})
export class RecipesModule {
    
}