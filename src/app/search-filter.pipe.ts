import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args)
      return value;
    return value.filter(
      (      item: { name: string | any[]; }) => item.name.indexOf(args) > -1
    )

  }
}