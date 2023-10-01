import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HotToastService} from "@ngneat/hot-toast";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  textArea: string = '';

  constructor(
    private http: HttpClient,
    private toast: HotToastService
  ) {
  }

  isFormValid(): boolean {
    return ![this.fullName.trim(), this.phoneNumber.trim()].some(value => !value);
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      const telegramBotToken = '6483644770:AAHhiK_hOizsxSQkCfGcPuf2Gq1UFLlXk6Y';
      const chatId = '753382232';

      const textMessage = `
        Новый запрос из сайта Ustuvor::
        ФИО > ' ${this.fullName}
        Номер телефона > ' ${this.phoneNumber}
        Почта > ' ${this.email}
        Сообщение > ' ${this.textArea}
      `;

      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('text', textMessage);

      this.http.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, formData).subscribe(
        response => {
          this.toast.success('Ваш запрос успешно отправлен')
          this.email = ''
          this.fullName = ''
          this.textArea = ''
          this.phoneNumber = ''
        },
        error => {
          this.toast.error('Ошибка отправки')
        }
      );
    } else {
      this.toast.warning('Пожалуйста, заполните все поля')
    }
  }
}
