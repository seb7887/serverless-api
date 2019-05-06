# Serverless API demo :1st_place_medal:

## To run locally

`sls invoke local -f \${FUNCTION}`

## Ways to call a Lambda

- **Synchronous:** when you call a lambda and you wait for the response, like APIs
- **Asynchronous:** when you trigger a lambda and you forget about it

## AWS API Gateway

- Used for routing HTTP requests to our lambda functions

## Notes:

- The function exported by handler.js file must have the same name that the function declared into the serverless.yml file
- You must create a IAM user with the permission's gist provided by Serverless to be able to deploy
- VPC: allows lambda to connect to Internet
