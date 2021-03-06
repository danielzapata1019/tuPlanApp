import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SliderService {
  public url:string="https://gist.githubusercontent.com/danielzapata1019/ba25bdfaa9accbe30447b05c653df8b0/raw/bc1ef330cdb29fc7d946205a329d87561b399476/banner.json";
  //contiene el llamado al servicio
  constructor(private http:HttpClient) { 
}
 public getSlider():any{
    return this.http.get(this.url);
  }
}
