import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Players = new Mongo.Collection('players');

if (Meteor.isServer) {
  Meteor.publish('players',() => {
    return Players.find({});
  });
}

Meteor.methods({
  'players.create'(name) {
    check(name, String);
    Players.insert({
      name,
      point: 0,
      createdAt: new Date(),
    });
  },
  'players.remove'(playerId) {
    check(playerId, String);
    Players.remove(playerId);
  },
  'players.positive'(playerId) {
    check(playerId, String);
    Players.update(playerId, { $inc: { point: 1 } });
  },
  'players.negative'(playerId) {
    check(playerId, String);
    Players.update(playerId, { $inc: { point: -1 } });
  },
});