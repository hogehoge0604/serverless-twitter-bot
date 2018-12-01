module.exports = () => {
  return {
    region: 'ap-northeast-1',
    bucket: '<S3_BUCKET_NAME>',

    // Lambda time zone
    timezone: 'Asia/Tokyo',

    // Access-Control-Allow-Origin
    origin: '*',

    twitter: {
      CONSUMER_KEY: '<CONSUMER_KEY>',
      CONSUMER_SECRET: '<CONSUMER_SECRET>',
      ACCESS_TOKEN_KEY: '<ACCESS_TOKEN_KEY>',
      ACCESS_TOKEN_SECRET: '<ACCESS_TOKEN_SECRET>'
    }
  }
}
