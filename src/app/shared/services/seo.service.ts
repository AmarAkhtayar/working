import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private titleService: Title, private metaService: Meta, private sessionService : SessionService) { }

  addTitle(title: string) {
    this.titleService.setTitle(title);
  }

  getTitle() {
    return document.getElementsByTagName('title')[0].innerHTML;
  }
  addDescription(desc: string) {
    this.metaService.addTag({ name: 'description', content: desc });
  }

  addKeywords(kw: string) {
    this.metaService.addTag({ name: 'keywords', content: kw });
  }

  addFacebookTwitterData(title: string, url : string, desc? : string, img_url? : string) {
    img_url = "https://front.staging.verdi.today/nl/assets/exfood6-min.png";
    this.metaService.addTag({ property: 'og:title', content: title });
    this.metaService.addTag({ name: 'twitter:title', content: title });

    this.metaService.addTag({ property: 'og:type', content: "website" });
    if(desc != null) {
      this.metaService.addTag({ property: 'og:description', content: desc });
    }
    if(img_url != null) {
      this.metaService.addTag({ property: 'og:image', itemprop: 'image', content: img_url});
      //img should be: min 50px width, max 130px-110px, w/h or h/w <= 3

      this.metaService.addTag({name: 'twitter:card', content: "summary_large_image"});
    }
    else {
      this.metaService.addTag({name: 'twitter:card', content: "summary"});
    }
    this.metaService.addTag({property: 'og:locale', content: this.sessionService.getLocale()});
    this.metaService.addTag({property: 'og:url', content: url});
    //TODO: check out: meta fb app id
    //twitter:site 	@username for the website used in the card footer. 	Not mandatory
    //twitter:creator 	@username for the content creator / author. 	Not mandatory
  }
  
  setCacheLimit(sec : number) {

  }


}
