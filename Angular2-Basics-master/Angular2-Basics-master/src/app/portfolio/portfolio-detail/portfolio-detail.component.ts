import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio} from '../../common/portfolio.model';
import { PortfolioService} from '../../common/portfolio.service'

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  portfolios: Portfolio[];
  id: any;
  paramsSub: any;
  portfolio: any;
  
  constructor(private activatedRoute: ActivatedRoute, private _portfolioService: PortfolioService) { }
  
  ngOnInit() {
      this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id']));
      //this.portfolio = this._portfolioService.getPortfolio(this.id);
      this._portfolioService.getPortfolio(this.activatedRoute.snapshot.params['id'])
        .subscribe(portfolio => this.portfolio = portfolio);
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
