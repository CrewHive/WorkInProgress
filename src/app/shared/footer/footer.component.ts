import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

    readonly title: string = 'CrewHive';

    readonly crewhiveEmail: string = "crewhive.supp@gmail.com";

    onSubmit(form: NgForm) {
      const userEmail: string = form.value.email;
      const msg: string = form.value.msg;
  
      if (!userEmail || !msg) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!userEmail.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (msg.length < 10) {
        alert("Message must be at least 10 characters long.");
        return;
      }
  
      if (msg.length > 500) {
        alert("Message must be less than 500 characters.");
        return;
      }
  
      if (msg.includes("http://") || msg.includes("https://")) {
        alert("Please do not include links in your message.");
        return;
      }
  
      const subject = encodeURIComponent("Email to CrewHive");
      const body = encodeURIComponent(`Message: ${msg}`);
      const mailtoLink = `mailto:${this.crewhiveEmail}?subject=${subject}&body=${body}`;
  
      window.location.href = mailtoLink;
      form.reset();
      alert("Your message has been sent. Thank you!");
    }
}
