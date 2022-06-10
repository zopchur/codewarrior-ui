import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { TenantService } from './tenant.service';
import { HttpClient } from '@angular/common/http';

export class Message {
  constructor(public author: string, public content: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private tenantService: TenantService, private readonly http: HttpClient) { }

  phonenumber: any;
  recapchaVerifier: any;
  otp: any;
  verify: any;
  confirmationResult: ConfirmationResult | undefined;


  conversation = new Subject<Message[]>();
  closeConversation = new Subject<any>();
  orginalMessages: any = [];
  obj = { mobileNo: 12, orgName: '', firstName: '', lastName: '', emailId: '' };
  messageMap: any = {
    'welcomeMsg': 'Hi Thank you for connecting us. Could you please write down your mobile no.',
    '1': 'Please enter otp',
    '2': 'Please enter organization name',
    '3': 'What is your first name?',
    '4': 'What is your last name?',
    '5': 'What is your email Id?',
    '6': 'Do you want to enroll? Say Yes or No',
    'yes': 'We will send you the ID password on your mail. Thank you',
    'no': 'Thank you. We will looking forward you.',
    'mobileNoIncorrect': 'Please enter valid Mobile no. with country code ex - +919557432988',
    'emailIncorrect': 'Please enter valid email id. ex - abcd@gamil.com',
    'firstNameIncorrect': 'Please enter valid first name. ex - Nand',
    'lasttNameIncorrect': 'Please enter valid last name. ex - Pandey',
    'incorrectYesNo': 'Please type yes or no.',
    'pleaseWait': 'Please wait. We are registering your request.',
    'failureMsg': 'There is something went wrong at our end. Please try again.',
    'alreadyCust': 'This mobile no is already registered with us. Thank you for connecting with us.',
    'otpSending': 'We are sending you OTP. Keep your mobile on',
    'enterOtp': 'Please enter OTP',
    'enterValidOtp': 'Please enter 6 digit otp. ex :- 342575',
    'canNotGetOTP': 'We can not send OTP right now. Please try after some time',
    'enterCorrectOTP': 'Please enter correct OTP.',
    'incorrectOrgName': 'Please enter valid organization name. ex:- abc',
    'alreadyRegisterOrg': 'This organization is already register with us. Thank you for connecting with us.',
    "hi": "Hello",
    "who are you": "My name is Test Chat Bot",
    "what is your role": "Just guide for the user",
    "defaultmsg": "I can't understand your text. Can you please try with different text."
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    if (this.orginalMessages.length === 6) {
      if (msg.toLowerCase() === 'yes') {
        const botMessage = new Message('bot', this.getBotMessage('pleaseWait'));
        this.conversation.next([botMessage]);
        this.sendDataToBackEnd(msg);
      } else if (msg.toLowerCase() === 'no') {
        this.answerFromBot(msg.toLowerCase());
        this.orginalMessages = [];
        this.closeBoatConversation(2500);
      } else {
        this.answerFromBot('incorrectYesNo');
      }
    } else {
      this.validateUserInput(msg);
    }

  }
  // close the boat conversation when done
  closeBoatConversation(wait: number) {
    setTimeout(() => {
      this.closeConversation.next(true);
    }, wait);
  }
  // send answer to user
  answerFromBot(msg: string, wait = 1500) {
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, wait);
  }

  // validate user input
  validateUserInput(userMessage: string) {
    switch (this.orginalMessages.length) {
      case 0:
        // validate mobile no.
        this.validateMobileNo(userMessage);
        break;

      case 1:
        // validate otp
        this.validateOTP(userMessage);
        break;
      case 2:
        // validate orgName name
        const isorgNameValid = this.validateString(userMessage);
        if (isorgNameValid) {
          this.callApiToValidateOrgName(userMessage);
        } else {
          this.answerFromBot('incorrectOrgName');
        }
        break;
      case 3:
        // validate the first name
        const isFirstNameValid = this.validateString(userMessage);
        // validate last name
        if (isFirstNameValid) {
          this.obj.firstName = userMessage;
          this.addingName(userMessage)
        } else {
          this.answerFromBot('firstNameIncorrect');
        }
        break;
      case 4:
        // validate last name
        const isLastNameValid = this.validateString(userMessage);
        if (isLastNameValid) {
          this.obj.lastName = userMessage;
          this.addingName(userMessage)
        } else {
          this.answerFromBot('lasttNameIncorrect');
        }
        break;
      case 5:
        // validate email ID
        this.validateEmailId(userMessage);
        break;
    }

  }

  // add name in the orginal list
  addingName(userMessage: string) {
    this.orginalMessages.push(userMessage);
    this.answerFromBot(this.orginalMessages.length.toString());
  }
  // validate mobile no.
  validateMobileNo(userMessage: string) {
    const isMobileNoValid = userMessage.match(/^(?!(\d)\1+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$/);
    if (isMobileNoValid) {
      this.callMobileVerifyAPI(userMessage);
    } else {
      this.answerFromBot('mobileNoIncorrect');
    }
  }
  // validate first name and last name
  validateString(userMessage: string) {
    const nameIsValid = userMessage.match(/^[a-zA-Z ]*$/);
    if (nameIsValid) {
      return true;
    } else {
      return false;
    }

  }

  // validate email id
  validateEmailId(userMessage: string) {
    const isEmailValid = userMessage.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
    if (isEmailValid) {
      this.orginalMessages.push(userMessage);
      this.obj.emailId = userMessage;
      this.answerFromBot(this.orginalMessages.length.toString());
    } else {
      this.answerFromBot('emailIncorrect');
    }

  }
  // find the msg for user to show
  getBotMessage(question: any) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }

  validateOTP(userMessage: any) {
    const isOtpValid = userMessage.match(/\b\d{6}\b/g);
    if (isOtpValid) {
      this.otp = userMessage;
      this.verifyOTP();

    } else {
      this.answerFromBot('enterValidOtp');
    }

  }

  callMobileVerifyAPI(mobileNo: any) {
    // on success of API and cust is new
    this.answerFromBot('otpSending', 0);
    this.phonenumber = mobileNo;
    this.getOTP();

    // already cust and reset the original list and close the conversation
    //this.orginalMessages = [];
    // this.answerFromBot('alreadyCust', 0);
    //this.closeBoatConversation(4000);

    // on fialure and reset the original list and close the modal
    //this.orginalMessages = [];
    // this.answerFromBot('failureMsg', 0);
    //this.closeBoatConversation(4000);



  }

  callApiToValidateOrgName(orgName: string) {
    // on success
    this.tenantService.verifyOrgName(orgName).subscribe({
      next: (response) => {
        // on duplicate reset list and close modal
        this.orginalMessages = [];
        this.answerFromBot('alreadyRegisterOrg', 0);
        this.closeBoatConversation(4000);
      },
      error: (err) => {
        // organization is not in the db
        if (err.includes('404')) {
          this.orginalMessages.push(orgName);
          this.obj.orgName = orgName;
          this.answerFromBot(this.orginalMessages.length.toString());
        } else {
          // on fialure and reset the original list and close the modal
          this.orginalMessages = [];
          this.answerFromBot('failureMsg', 0);
          this.closeBoatConversation(4000);
        }
      },
    });



  }


  sendDataToBackEnd(msg: string) {
    //call API
    this.tenantService.addTenant(this.obj).subscribe({
      next: (success) => {
        if (success) {
          // need to put in success call
          this.answerFromBot(msg.toLowerCase());
          this.orginalMessages = [];
          this.closeBoatConversation(4000);
        }
      },
      error: (error) => {
        // failure of api
        this.answerFromBot('failureMsg');
        this.orginalMessages = [];
      }

    })
  }

  // for otp code.


  getOTP() {
    const auth = getAuth();
    auth.languageCode = null;
    if (!this.recapchaVerifier) {
      this.recapchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
      }, auth);

    }
    signInWithPhoneNumber(auth, this.phonenumber, this.recapchaVerifier)
      .then((confirmationResult) => {
        this.orginalMessages.push(this.phonenumber);
        this.obj.mobileNo = this.phonenumber;
        this.confirmationResult = confirmationResult;
        this.answerFromBot('enterOtp', 0);

      }).catch((error) => {
        console.log(error);
        if (error.code === 'auth/invalid-phone-number') {
          this.answerFromBot('mobileNoIncorrect');
        } else {
          this.orginalMessages = [];
          this.answerFromBot('canNotGetOTP', 0);
          this.closeBoatConversation(4000);
          setTimeout(() => {
            window.location.reload();
          }, 5000);

        }
      });
  }

  verifyOTP() {
    console.log(this.confirmationResult);
    this.verify = JSON.parse(localStorage.getItem('settingId') || '{}');
    if (this.confirmationResult)
      this.confirmationResult.confirm(this.otp).then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        this.orginalMessages.push(this.otp);
        this.answerFromBot(this.orginalMessages.length.toString());
        console.log('user validation success', user);
        // ...
      }).catch((error: any) => {
        this.answerFromBot('enterCorrectOTP', 0);

      });
  }
}
