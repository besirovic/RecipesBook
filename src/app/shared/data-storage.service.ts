import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';

import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

	constructor(
		public http: Http, 
		public recipeService: RecipeService,
		public authService: AuthService
	) {}

	storeRecipes() {

		const token = this.authService.getToken();

		return this.http.put("https://quocosdev.firebaseio.com/recipes.json?auth=" + token, this.recipeService.getRecipes());
	}

	getRecipes() {

		const token = this.authService.getToken();

		this.http.get("https://quocosdev.firebaseio.com/recipes.json?auth=" + token)
			.map((response: Response) => {
				const recipes: Recipe[] = response.json();

				for( let recipe of recipes )
					if( !recipe['ingredients'] ) 
						recipe['ingredients'] = [];
				
				return recipes;
			})
			.subscribe((recipes: Recipe[]) => {
				this.recipeService.setRecipes(recipes);
			});
	}

}