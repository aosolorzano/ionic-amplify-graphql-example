import {Component, OnInit} from '@angular/core';
import {Company} from '../../services/graphql/API.service';
import {Logger} from 'aws-amplify';
import {ActivatedRoute, Router} from '@angular/router';
import {CompaniesService} from '../../services/jobs/companies.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  public locationId: string;
  public companies: Company[];
  public searchText: string;
  private logger = new Logger('CompaniesPage');

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private alertController: AlertController,
              private companiesService: CompaniesService) {
  }

  async ngOnInit() {
    this.locationId = this.activatedRoute.snapshot.paramMap.get('locationId');
    this.logger.debug('Location ID: ', this.locationId);
    if (this.locationId) {
      this.companies = await this.companiesService.getCompaniesByLocationId(this.locationId);
    } else {
      this.companies = await this.companiesService.getAllCompanies();
    }
    this.logger.debug('Companies found: ', this.companies);
  }

  public async loadOpenPositions(companyId: string) {
    await this.router.navigate(['/app/pages/vacancies/'.concat(companyId)]);
  }

  public onChange(event: any) {
    this.searchText = event.detail.value;
  }

  public async showDetails(company: Company) {
    const alert = await this.alertController.create({
      header: 'Company Info',
      mode: 'ios',
      backdropDismiss: false,
      message: `This company is dedicated to ${company.industry}. It official website is: ${company.url}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
