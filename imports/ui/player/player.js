import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import { Players } from '../../api/players/players.js';
import './player.html';

Template.player.onCreated(function playerOnCreated() {
  Meteor.subscribe('players');
});

Template.player.helpers({
  players() {
    return Players.find({});
  }
});

Template.player.events({
  'click .js-negative'(event, instance) {
    // instance.point.set(instance.point.get() - 1);
    Meteor.call('')
  },
  'click .js-positive'(event, instance) {
    instance.point.set(instance.point.get() + 1);
  },
});
