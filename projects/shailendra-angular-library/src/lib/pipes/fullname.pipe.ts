import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
  transform(firstName: string,...lastName:string[]): string {
    return firstName +" "+ lastName.join(" ");
  }
}