import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'calcPercent'})
export class CalcPercentPipe implements PipeTransform {
    transform(index: number, total: number): string{
        return (index / total * 100) + '%';
    }
}