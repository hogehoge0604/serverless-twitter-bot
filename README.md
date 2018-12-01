# Serverless Twitter Bot

Simple tweet bot using serverless framework

## Installation
If yet serverless framework not been installed. Please install from the following URL
https://serverless.com/framework/docs/providers/aws/guide/installation/

1. get API key from developer.twitter.com

2. Clone `serverless-twitter-bot` from github
```bash
git clone https://github.com/hogehoge0604/serverless-twitter-bot.git
```
OR
```bash
wget https://github.com/hogehoge0604/serverless-twitter-bot/archive/master.zip -O serverless-twitter-bot.zip
unzip serverless-twitter-bot.zip
```

3. Execute npm command
```bash
cd serverless-twitter-bot
npm install
```

4. Edit file  
  
conf/custom.js
___
```
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
```

| Edit place | Description |
-------------|-------------|
| <S3_BUCKET_NAME> | Set the bucket name to store notification contents. |
| <CONSUMER_KEY> | copy "API key" from developer.twitter.com |
| <CONSUMER_SECRET> | copy "API secret key" from developer.twitter.com |
| <ACCESS_TOKEN_KEY> | copy "Access token" from developer.twitter.com |
| <ACCESS_TOKEN_SECRET> | copy "Access token secret" from developer.twitter.com |

5. Deploy

```bash
serverless deploy
```

## Usage
Store text file in S3
Once every ten minutes. Randomly tweet  from text files stored in S3 

## License
MIT
