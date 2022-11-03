import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libRoundBlock]'
})
export class RoundBlockDirective  implements OnInit {
  @Input() libRoundBlock: string | undefined;
  @Input() bgColor: string | undefined;

  constructor(
   private elmRef: ElementRef, 
   private renderer: Renderer2) 
  { }
  ngOnInit() {
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', this.libRoundBlock);
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', this.bgColor);
  }
}
