import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './form.html';

Template.form.onCreated(function formOnCreated() {
  Meteor.subscribe('players');
});

Template.form.events({
  'click .js-createPlayer'(event) {
    event.preventDefault();
    const name = $('.js-valuePlayer').val();
    $('.js-valuePlayer').val('');
    return Meteor.call('players.create', name);
  },
  // 'click .js-resetScore'(event) {
  //   event.preventDefault();
  //   return Meteor.call('players.resetScore', (err, res) => {
  //     if (err) {
  //       console.log(err);
  //       return err;
  //     }
  //     console.log(res);
  //     return res;
  //   });
  // }
});

