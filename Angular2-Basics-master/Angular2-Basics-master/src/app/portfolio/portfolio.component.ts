import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Portfolio} from '../common/portfolio.model';
import {PortfolioService} from '../common/portfolio.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  portfolios: Portfolio[];
  constructor( private _portfolioService: PortfolioService) {}

  ngOnInit() {
  	this.portfolios = this._portfolioService.getPortfolios();
  }
}