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
  },
});

Template.player.events({
  'click .js-positive'(event, instance) {
    Meteor.call('players.positive', this._id);
  },
  'click .js-negative'(event, instance) {
    Meteor.call('players.negative', this._id);
  },
  'click .js-remove'() {
    Meteor.call('players.remove', this._id);
  },
});
