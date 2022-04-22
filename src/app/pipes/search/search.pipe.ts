import {Pipe, PipeTransform} from '@angular/core';
import {Logger} from 'aws-amplify';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  private logger = new Logger('SearchPipe');

  transform(arrayValues: any[], textToSearch: string = '', column: string = 'name'): any[] {
    this.logger.debug('transform() - START: ', textToSearch);
    if (textToSearch === '' || !arrayValues) {
      return arrayValues;
    }
    textToSearch = textToSearch.toLowerCase();
    return arrayValues.filter(
      item => item[column].toLowerCase().includes(textToSearch)
    );
  }

}
