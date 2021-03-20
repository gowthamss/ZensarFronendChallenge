import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!searchText) return users;

    searchText = searchText.toLowerCase();
    return users.filter((item) => item.name.toLowerCase().includes(searchText));
  }
}
