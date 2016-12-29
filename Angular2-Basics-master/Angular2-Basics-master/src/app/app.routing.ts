import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES:Routes =[
	{ path: '', 					component:HomeComponent },
	{ path: 'about', 				component:AboutComponent },
	{ path: 'portfolio', 			component:PortfolioComponent },
	{ path: 'portfoliodetail/:id', 	component:PortfolioDetailComponent },
	{ path: 'contact', 	component:UserComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);