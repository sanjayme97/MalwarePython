import { Directive, ViewContainerRef, TemplateRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appMyForloop]'
})
export class MyForloopDirective implements OnChanges  {
  
  @Input()
  appMyForloopOf:Array<any>;
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  ValidateFibonassi(num:number){
    return num%2 == 0?true:false;
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.container.clear();
    for(let arrayobj of this.appMyForloopOf){
      this.container.createEmbeddedView(this.template,{
        $implicit: arrayobj,
        index: this.appMyForloopOf.indexOf(arrayobj),
        fibonassi: this.ValidateFibonassi(this.appMyForloopOf.indexOf(arrayobj)+1)
      });
    }
  }

}
