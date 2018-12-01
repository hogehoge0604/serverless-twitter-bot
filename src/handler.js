'use strict'

const AWS = require('aws-sdk');
const S3 = new AWS.S3({ apiVersion: '2006-03-01' });
const Twitter = require('twitter');

module.exports.tweet = (event, callback) => {
  const twitter = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

  const get_objects = () => {
    return new Promise((resolve, reject) => {
      S3.listObjects({
        Bucket: process.env.BUCKET,
      }, function (err, data) {
        if(err) {
          console.log(err);
          reject(err);
        }
        resolve(data.Contents);
      });
    });
  };

  const get_object = (key) => {
    return new Promise((resolve, reject) => {
      S3.getObject({
        Bucket: process.env.BUCKET,
        Key: key
      }, function (err, data) {
        if(err) {
          console.log(err);
          reject(err);
        }
        resolve(data.Body.toString());
      });
    });
  };

  const send_tweet = (body) => {
    twitter.post('statuses/update', {
      status: body
    });
  };

  get_objects().then((objects) => {
    let object = objects[Math.floor(Math.random() * objects.length)];
    get_object(object.Key).then((body) => {
      send_tweet(body);
    });
  });
}
