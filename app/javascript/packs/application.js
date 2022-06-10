// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "controllers"
import "bootstrap"
import { initSweetalert } from '../plugins/init_sweetalert';
import { initStarRating } from '../plugins/init_star_rating';

initStarRating();

Rails.start()
Turbolinks.start()
ActiveStorage.start()



initSweetalert('#sweet-alert-delete', {
  title: "Are you sure?",
  text: "This action cannot be reversed",
  icon: "warning"
}, (value) => {
  console.log("We got: ",value)
  if (value) {
    const link = document.querySelector('#delete-link');
    link.click();
  }
}

);

initSweetalert('#sweet-alert-create', {
  title: "Thank you !!!",
  text: "Your item has been added to Cup of Sugar",
  icon: "success"
}, (value) => {
  if (value) {
    const submit = document.querySelector('#create-link');
    form.submit();
  }
}

);

initSweetalert('#sweet-alert-update', {
  title: "Hello !",
  text: "Your item has been updated.",
  icon: "success"
}, (value) => {
  if (value) {
    const link = document.querySelector('#update-link');
    link.click();
  }
}

);

initSweetalert('#sweet-alert-reservation', {
  title: "Thank you !",
  text: "Your reservation has been sent",
  icon: "success"
}, (value) => {
  if (value) {
    const link = document.querySelector('#reservation-link');
    link.click();
  }
}

);
document.addEventListener('turbolinks:load', () => {
    // Call your functions here, e.g:
    // initSelect2();
  });
