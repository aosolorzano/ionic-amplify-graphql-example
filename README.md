## What is it?
This project uses Amplify Framework to add an API to interact with AWS GraphQL and access DynamoDB table's data.

## Detailed components' creation/modification
You can find more detail of the configurations and components coded in this project in the following post:
[Integrate AWS GraphQL in your Ionic/Angular applications using Amplify.](https://aosolorzano.medium.com/integrate-aws-graphql-in-your-ionic-angular-applications-using-amplify-fe4678c2060a)

## Requirements
1. An AWS account.
2. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
4. [Amplify CLI](https://docs.amplify.aws/cli/start/install).

## Install/Update dependencies
```
sudo npm install -g @aws-amplify/cli
npm install
```

### Animate CSS
[Animate.css](https://animate.style/) is a library of ready-to-use, cross-browser animations for use in your web projects.
```
npm install animate.css --save
```

## Configuring Amplify for your AWS account
First, you need to initialize the app with amplify with the following command:
```
amplify configure
amplify init
```
The previous command ask you to select your AWS profile installed in your local machine to deploy this infra in your AWS account and region.

*NOTE:* If the previous command shows that there is a new version of Amplify CLI, try to update it first and then install Amplify again:
```
amplify upgrade
sudo npm install -g @aws-amplify/cli
```

## Configure GraphQL API
First, you need to configure the API integration for the app, selected GraphQL as desired one:
```
amplify add api
```
Then, you need to modify the *amplify/backend/api/ionicamplifygraphql/schema.graphql* file adding the following content:
```
# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!

type Location @model(subscriptions: { level: off }, timestamps: null) {
  id: ID! @primaryKey(sortKeyFields: ["country"])
  country: ID!
  flagImageUrl: String!
}

type Company @model(subscriptions: { level: off }, timestamps: null) {
  id: ID! @primaryKey(sortKeyFields: ["locationId"])
  locationId: ID! @index(name: "companyLocationIdIdx", queryField: "getCompaniesByLocationId")
  city: String!
  name: String!
  industry: String!
  url: String!
  location: Location @hasOne(fields: ["locationId"])
}

type OpenPosition @model(subscriptions: { level: off }, timestamps: null) {
  id: ID! @primaryKey(sortKeyFields: ["companyId"])
  companyId: ID! @index(name: "positionCompanyIdIdx", queryField: "getOpenPositionsByCompanyId")
  title: String!
  seniority: String!
  field: String!
  skills: String!
  company: Company @hasOne(fields: ["companyId"])
}
```
This content creates 3 DynamoDB tables on your AWS account, and we will use them to interact with. 

## Loading testing data
You can prefer to load an initial data to test this app. If so, run the script at project root folder:
```
./load-test-data.sh
```

## Build and deploy the project locally
```
ionic build
ionic serve
```
