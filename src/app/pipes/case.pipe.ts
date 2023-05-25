import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(x:any): any {
    return x.toTitleCase();
  }

}
