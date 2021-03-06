import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-two',
  template: `<app-header></app-header>
  <app-intro-two></app-intro-two>
  <app-portfolio-carousel></app-portfolio-carousel>
  <app-testimonials [backgroundGray]="true"></app-testimonials>
  <app-services-carousel></app-services-carousel>
  <app-cta></app-cta>
  <app-pricings></app-pricings>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeTwoComponent implements OnInit, OnDestroy {
  constructor(
    private fix: LandingFixService,
    private translate: TranslateService)
  { translate.setDefaultLang('en');}
  
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
}
