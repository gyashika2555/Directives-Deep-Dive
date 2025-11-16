import { Directive, input , inject, ElementRef } from "@angular/core";

@Directive({
 selector:'a[appSafeLink]',
standalone:true,
host: {
    '(click)' : 'onConfirmLeavePage($event)'
}
})

export class SafeLinkDirectives{
 queryParam=input('myapp', {alias:'appSafeLink'});
 private hostElementRef=inject<ElementRef<HTMLAnchorElement>>(ElementRef);
   
 constructor(){
    console.log('Safe Link Directive is active!');
 }
  onConfirmLeavePage(event:MouseEvent){
   const wantsToLeave= window.confirm('do you want to leave the app ?');
  

   if (wantsToLeave){
      // const address= (event.target as HTMLAnchorElement).href;
          const address= this.hostElementRef.nativeElement.href;
           this.hostElementRef.nativeElement.href = 
           address +'?from=' + this.queryParam();

      // (event.target as HTMLAnchorElement).href =address +'?from=' +
      //     this.queryParam();
      return;
   }

   event.preventDefault();
}
}