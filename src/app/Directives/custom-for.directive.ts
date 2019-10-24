import { Directive, OnChanges, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective implements OnChanges {

  @Input()
  appCustomForOf:Array<any>;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {

  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.container.clear();

    for (const input of this.appCustomForOf) {
      this.container.createEmbeddedView(this.template,  {
        $implicit: input,
        index: this.appCustomForOf.indexOf(input),
       });
    }
  }

}
