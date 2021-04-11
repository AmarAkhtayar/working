import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorHandlingService {

  constructor() { }

  calculateHue(R, G, B): number {
    let Max = 0.0;
    let Min = 0.0;

    let fR = R / 255.0;
    let fG = G / 255.0;
    let fB = B / 255.0;

    if (fR >= fG && fR >= fB)
      Max = fR;
    else if (fG >= fB && fG >= fR)
      Max = fG;
    else if (fB >= fG && fB >= fR)
      Max = fB;

    if (fR <= fG && fR <= fB)
      Min = fR;
    else if (fG <= fB && fG <= fR)
      Min = fG;
    else if (fB <= fG && fB <= fR)
      Min = fB;

    let Hue;

    if (Max == Min) {
      Hue = -1.0;
    }
    else {
      if (Max == fR) {
        Hue = (fG - fB) / (Max - Min);
      }
      else if (Max == fG) {
        Hue = 2.0 + (fB - fR) / (Max - Min);
      }
      else if (Max == fB) {
        Hue = 4.0 + (fR - fG) / (Max - Min);
      }

      Hue *= 60.0;

      if (Hue < 0.0) {
        Hue += 360.0;
      }
    }
    return Hue;
  }

  calculateLightness(R, G, B) : number {
    let Max = 0.0
    let Min = 0.0

    let fR = R / 255.0;
    let fG = G / 255.0;
    let fB = B / 255.0;

    if(fR >= fG && fR >= fB)
        Max = fR;
    else if(fG >= fB && fG >= fR)
        Max = fG;
    else if(fB >= fG && fB >= fR)
        Max = fB;

    if(fR <= fG && fR <= fB)
        Min = fR;
    else if(fG <= fB && fG <= fR)
        Min = fG;
    else if(fB <= fG && fB <= fR)
        Min = fB;

    let Lightness = (Min + Max) / 2.0;

    return Lightness * 100;
  }

  oppositeHue(r, g, b): number {
    let hue = this.calculateHue(r, g, b);
    let opposite = hue + 180;
    if (opposite > 360) {
      opposite = opposite - 360;
    }

    return opposite;
  }

  matchingHue(hue: number, colors: any[]): any[] {
    if (colors.length == 0) {
      console.error("Cannot find closest color with no list of colors to compare with");
    }
    let smallestDelta = 10000;
    let smallestColor;

    for (const color of colors) {
      let testHue = this.calculateHue(color[0], color[1], color[2]);
      let deltaInHue = Math.abs(hue - testHue);
      // console.log(testHue, ", ", deltaInHue, "<", smallestDelta ,deltaInHue < smallestDelta)
      if (deltaInHue < smallestDelta) {
        smallestDelta = deltaInHue;
        smallestColor = color;
      }
    };

    return smallestColor;
  }
}
