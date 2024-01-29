import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { MessageType } from '../model/message';

@Directive({
  selector: '[appMessageStyles]'
})
export class MessageDirective implements OnInit {

  @Input() messageType: MessageType = 'input';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.applyStyles();
  }

  private applyStyles() {

    this.renderer.addClass(this.el.nativeElement, 'slideUpAnimation');
    if (this.messageType === 'output') {
      this.renderer.addClass(this.el.nativeElement, 'message-output');
    } else if (this.messageType === 'input') {
      this.renderer.addClass(this.el.nativeElement, 'message-input');
    }
  }

}
