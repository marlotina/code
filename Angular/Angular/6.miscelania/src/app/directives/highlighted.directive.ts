import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private el:ElementRef) {
    //el.nativeElement.style.backgroundColor ="yellow";
   }

   @Input("appHighlighted")newColor:string;

   @HostListener('mouseenter') mouseIntro(){
    this.highlighter(this.newColor || "yellow");
   }

   @HostListener('mouseleave') mouseOut(){
    this.highlighter(this.newColor || null);
   }

   private highlighter(color:string){
    this.el.nativeElement.style.backgroundColor =color;
   }

}
