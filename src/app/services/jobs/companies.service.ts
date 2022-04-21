import {Injectable} from '@angular/core';
import {Logger} from 'aws-amplify';
import {APIService, Company} from '../graphql/API.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private logger = new Logger('CompaniesService');

  constructor(private api: APIService) {
  }

  public async getCompaniesByLocationId(locationId: string): Promise<Array<Company>> {
    this.logger.debug('getCompaniesByLocationId() - START: ', locationId);
    const result: Array<Company> = [];
    await this.api.GetCompaniesByLocationId(locationId).then(async data => {
      for (const item of data.items) {
        result.push(item);
      }
    });
    this.logger.debug('getCompaniesByLocationId() - END');
    return result;
  }
}
