import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ascii"
})
export class AsciiPipe implements PipeTransform {
  transform(value: string): number[] {
    return Array.from(value).map(char => char.charCodeAt(0));
  }
}
