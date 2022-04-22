import {Injectable} from '@angular/core';
import {Logger} from 'aws-amplify';
import {APIService, Company} from '../graphql/API.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private nextToken: string = null;
  private logger = new Logger('CompaniesService');

  constructor(private api: APIService) {
  }

  public async getCompaniesByLocationId(locationId: string): Promise<Array<Company>> {
    this.logger.debug('getCompaniesByLocationId() - START: ', locationId);
    const result: Array<Company> = [];
    await this.api.GetCompaniesByLocationId(locationId).then(async response => {
      for (const item of response.items) {
        result.push(item);
      }
    });
    this.logger.debug('getCompaniesByLocationId() - END');
    return result;
  }

  public async getCompanies(): Promise<Array<Company>> {
    this.logger.debug('getCompanies() - START');
    const result: Array<Company> = [];
    await this.api.ListCompanies(null, null, null, null, this.nextToken, null)
      .then(async response => {
        for (const item of response.items) {
          result.push(item);
        }
        this.nextToken = response.nextToken ? response.nextToken : null;
      });
    this.logger.debug('getCompanies() - END');
    return result;
  }

  public isMoreDataToRetrieve(): boolean {
    return this.nextToken ? true : false;
  }
}
