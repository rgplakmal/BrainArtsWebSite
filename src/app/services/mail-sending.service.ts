import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
 import { MsgPopupService } from './msg-popup.service';
import { reject } from 'q';
import { AppConfig } from '../configFiles/app.config';


@Injectable()
export class MailSendingService {

  serverConfig: any = {};

  constructor(private http: HttpClient, private msgPopup: MsgPopupService) {
     this.serverConfig = AppConfig.mailServerConfiguration;
  }

  sendMail(htmlObj: any) {

    return new Promise(resolve => {
      // var url = 'http://' + this.serverConfig.IP_ADDRESS + ':' + this.serverConfig.PORT + '/sendMail';
      // var url2 = 'http://212.18.237.75/~sistouro/contact_action.php';
      var url2 = 'http://localhost:3000/sendMail';

      this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'show_modal' });

      const headers = new HttpHeaders()
        .set("Content-Type", "application/json");

      this.http.post(url2, htmlObj , {headers}).subscribe((res: any) => {
        if (res.status == 200) {
          console.log("Sent");
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type: 'success',
            msg: res.responseMessage
          });
          this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'hide_modal' });
          resolve(res);
        } else {
          console.log("not sent");
          this.msgPopup.broadcastMessagePopupEventEmitter({
            type: 'error',
            msg: res.responseMessage
          });
          this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'hide_modal' });
          resolve(res);
        }

      }, err => {
        console.log("err");

        this.msgPopup.broadcastMessagePopupEventEmitter({
          type: 'error',
          msg: "An error occured"
        });
        this.msgPopup.broadcastMessagePopupEventEmitter({ type: 'hide_modal' });
        reject(err);

      });
    });
  }

}
