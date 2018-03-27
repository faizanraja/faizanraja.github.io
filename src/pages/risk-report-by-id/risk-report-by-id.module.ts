import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskReportByIdPage } from './risk-report-by-id';

@NgModule({
  declarations: [
    RiskReportByIdPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskReportByIdPage),
  ],
})
export class RiskReportByIdPageModule {}
