import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "urlFormatter"
})
export class UrlFormatterPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s+/g, '-').toLowerCase();
  }
}
