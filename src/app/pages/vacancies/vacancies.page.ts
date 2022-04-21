import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OpenPosition} from '../../services/graphql/API.service';
import {Logger} from 'aws-amplify';
import {OpenPositionsService} from "../../services/jobs/open-positions.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.page.html',
  styleUrls: ['./vacancies.page.scss'],
})
export class VacanciesPage implements OnInit {

  public companyId: string;
  public vacancies: OpenPosition[];
  private logger = new Logger('VacanciesPage');

  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController,
              private openPositionsService: OpenPositionsService) { }

  public async ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.paramMap.get('companyId');
    this.logger.debug('Company ID: ', this.companyId);
    if (this.companyId) {
      this.vacancies = await this.openPositionsService.getOpenPositionsByCompanyId(this.companyId);
    } else {
      this.vacancies = new Array();
    }
  }

  public async showDetails(vacancy: OpenPosition) {
    const alert = await this.alertController.create({
      header: 'Open Position Info',
      mode: 'ios',
      backdropDismiss: false,
      message: `The field for this vacancy is: ${vacancy.field}. The required skill is: ${vacancy.skills}.`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
