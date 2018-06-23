import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [SliderService] //Proveedor del servicio 
})
export class SliderComponent implements OnInit {

  constructor(private sliderService: SliderService,) { }
  listImg: any;
  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void {
    this.sliderService.getSlider().subscribe(res => {
      this.listImg =res.Images;
      console.log(this.listImg);
    });
  }
}
