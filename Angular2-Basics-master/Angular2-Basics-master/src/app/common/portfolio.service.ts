import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Portfolio } from './portfolio.model';

@Injectable()
export class PortfolioService {
  private portfolios: Portfolio[] = [
    {
      id: 1, 
      title: 'Portfolio one', 
      url: 'images/portfolio/cabin.png', 
      desc: 'Use this area of the page to describe your project.The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    },
    {
      id: 2, 
      title: 'Portfolio Two', 
      url: 'images/portfolio/circus.png', 
      desc: 'Use this area of the page to describe your project.The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    },
    {
      id: 3, 
      title: 'Portfolio Three', 
      url: 'images/portfolio/cake.png', 
      desc: 'Use this area of the page to describe your project.The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    },
    {
      id: 4, 
      title: 'Portfolio Four', 
      url: 'images/portfolio/game.png', 
      desc: 'Use this area of the page to describe your project.The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    },
    {
      id: 5, 
      title: 'Portfolio Five', 
      url: 'images/portfolio/safe.png', 
      desc: 'Use this area of the page to describe your project.The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    },
    {
      id: 6, 
      title: 'Portfolio Six', 
      url: 'images/portfolio/submarine.png', 
      desc: 'Use this area of the page to describe your project.The icon above is part of a free icon set by Flat Icons. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    }
  ];

  getPortfolios(): Portfolio[] {
    return this.portfolios;
  }

  // getPortfolio(id){
  //   for(var i = 0; i< this.portfolios.length; i++)
  //   {
  //      if(this.portfolios[i].id === id)
  //       return this.portfolios[i];
  //   }
  //   return null;
  // }

  getPortfolio(id) {
    return Observable.create(observer => {
      observer.next(this.portfolios.find((portfolio) => portfolio.id == id))
    });
  }

}
