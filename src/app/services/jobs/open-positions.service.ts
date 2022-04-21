import {Injectable} from '@angular/core';
import {APIService, OpenPosition} from '../graphql/API.service';
import {Logger} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class OpenPositionsService {

  private logger = new Logger('CompaniesService');

  constructor(private api: APIService) {
  }

  public async getOpenPositionsByCompanyId(companyId: string): Promise<Array<OpenPosition>> {
    this.logger.debug('getOpenPositionsByCompanyId() - START: ', companyId);
    const result: Array<OpenPosition> = [];
    await this.api.GetOpenPositionsByCompanyId(companyId).then(async data => {
      for (const item of data.items) {
        result.push(item);
      }
    });
    this.logger.debug('getOpenPositionsByCompanyId() - END');
    return result;
  }
}
