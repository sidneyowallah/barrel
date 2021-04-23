import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Auth } from 'aws-amplify';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import {
  APIService,
  CreateUserInput,
} from '../../../../../src/app/API.service';

import { User } from '../user';

export interface Favorite {
  name: string;
}

@Component({
  selector: 'barrel-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  userId: string;
  username: string;
  email: string;
  phone: string;
  imagePath: string;
  showPhoto: boolean;
  userCreated: boolean;
  UserRole = 'ADMIN';
  user = new User('', '', '', '', '', '', '', '', '', '', [''], '');

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  profileForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  startDate = new Date(1990, 0, 1);
  selected = '';

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Click to select image file';

  @ViewChild('chipList', { static: true }) chipList;
  StateArray: any = ['Kansas', 'Oklahoma', 'Texas'];
  FavoritesArray: Favorite[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private formBuilder: FormBuilder,
    private api: APIService,
    private toastr: ToastrService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 120, 0, 1);
    this.maxDate = new Date(currentYear - 18, 0, 1);
  }

  // if (todoName) {
  //   this.created.emit(todoName);
  //   this.form.setValue({ todoName: '' });
  // }

  ngOnInit(): void {
    this.getUserInfo();
    this.reactiveForm();
  }

  async getUserInfo() {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(async (user) => {
        this.username = user.username;
        this.email = user.attributes.email;
        this.userId = user.attributes.sub;
        this.phone = user.attributes.phone_number;

        const result = await this.api.GetUser(this.userId);
        const contact = {
          username: result.username,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          phone: result.phone,
          dob: result.dob,
          address: result.address,
          state: result.state,
          profileImg: result.profileImg,
          favorites: result.favorites,
        };

        this.profileForm.patchValue(contact);

        console.log({ result });
        if (!result) {
          this.userCreated = false;
          this.user = new User(
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            [''],
            ''
          );
        } else {
          this.userCreated = true;
          this.showPhoto = !!result.profileImg;
          this.user = new User(
            this.userId,
            result.username,
            result.firstName,
            result.lastName,
            result.email,
            result.phone,
            result.dob,
            result.address,
            result.state,
            result.profileImg,
            result.favorites,
            result.role
          );
        }
      })
      .catch((err) => console.log(err));
  }

  /* Reactive form */
  reactiveForm() {
    this.profileForm = this.formBuilder.group({
      username: [{ value: '', disabled: true }, Validators.required],
      email: [
        { value: '', disabled: true },
        [Validators.required, Validators.email],
      ],
      phone: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      favorites: this.FavoritesArray,
      profileImg: [''],
    });
  }

  /* Date */
  date(e) {
    const convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.profileForm.get('dob').setValue(convertDate, {
      onlyself: true,
    });
  }

  /* Add dynamic favorites */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add favorite
    if ((value || '').trim() && this.FavoritesArray.length < 5) {
      this.FavoritesArray.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic favorites */
  remove(favorites: Favorite): void {
    const index = this.FavoritesArray.indexOf(favorites);
    if (index >= 0) {
      this.FavoritesArray.splice(index, 1);
    }
  }

  /* Handle form errors*/
  public errorHandling = (control: string, error: string) => {
    return this.profileForm.controls[control].hasError(error);
  };

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name;
      });

      // HTML5 FileReader API
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Click to select image file';
    }
  }

  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  async submitProfileForm() {
    const user = {
      id: this.userId,
      username: this.username,
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
      email: this.profileForm.get('email').value,
      phone: this.profileForm.get('phone').value,
      dob: this.profileForm.get('dob').value,
      address: this.profileForm.get('address').value,
      state: this.profileForm.get('state').value,
      profileImg: this.profileForm.get('profileImg').value,
      favorites: this.profileForm.get('favorites').value,
      role: this.UserRole,
    };
    await this.api[this.getType()](user);
    console.log({ user });
    this.toastr.success('Your profile has been updated');
  }
}
