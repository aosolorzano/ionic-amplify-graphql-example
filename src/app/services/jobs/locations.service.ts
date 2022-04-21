import { Injectable } from '@angular/core';
import {APIService, Location} from '../graphql/API.service';
import {Logger} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private logger = new Logger('LocationsService');

  constructor(private api: APIService) { }

  public async getAllLocations(): Promise<Array<Location>>  {
    this.logger.debug('getAllLocations() - START');
    const result: Array<Location> = [];
    await this.api.ListLocations().then(async data => {
      for (const item of data.items) {
        result.push(item);
      }
    });
    this.logger.debug('getAllLocations() - END');
    return result;
  }
}
