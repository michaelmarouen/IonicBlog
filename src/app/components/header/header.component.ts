import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPageComponent } from '../edit-page/edit-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title : string;
  @Input() action :string;
  @Input() post: any = null;

  constructor(
      private _modalCtrl: ModalController
  ) {
   }

  ngOnInit(): void {    
    console.log(this.title)
    console.log(this.action)
  }

  async openModal(){
    let componentProps= null
    switch(true){
      case this.action ==='add-outline':
      break;
      case this.action ==='pencil-outline':
        componentProps = {post:this.post}
      break;
      default:
        break;
    }

    const ionModal = await this._modalCtrl.create({
      component: EditPageComponent,
      componentProps
    })
    return await ionModal.present();
  }
}
