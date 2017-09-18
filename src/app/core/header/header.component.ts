import { 
	Component, 
	OnInit
} from '@angular/core';

import { Response } from '@angular/http';

import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(
		public authService: AuthService,
		public dataSrorageService: DataStorageService
	) { }

	ngOnInit() {}

	onSaveData() {
		this.dataSrorageService.storeRecipes().subscribe((response: Response) => {
			console.log(response);
		});
	}
 
 	onFetchData() {
 		this.dataSrorageService.getRecipes();
 	}

 	onLogout() {
 		this.authService.logout();
 	}

}
