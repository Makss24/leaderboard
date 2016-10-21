import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './form.html';

Template.form.onCreated(function formOnCreated() {
  Meteor.subscribe('players');
});

Template.form.events({
  'click .js-createPlayer'() {
    const name = $('.js-valuePlayer').val();
    console.log(name);
    return Meteor.call('players.create', name);
  },
});


