# GraphQL
Learn GraphQL for LWC.

GraphQL is a query language for APIs and a runtime for executing those queries. It
was developed by Facebook in 2012 and publicly released in 2015.
It allows clients to request exactly the data they need.
reduces over-fetching and under-fetching problems common with REST APIs.
and lets clients retrieve multiple related pieces of data in a single request.
We can perform queries and mutations, such as create, update, and delete, using
GraphQL in LWC.
However, mutations are still under beta as of the time I am creating this video, but I will
cover them in this GraphQL series.
Official document form salesforce: https://developer.salesforce.com/docs/platform/graphql/guide

Query Syntax for GraphQL
query {
objectName {
field1
field2
field3
}
}


Example to get Id and Name from Account
query {
uiapi {
query {
Account {
edges {
node {
Id
Name {
value
}
}
}
}
}
}
}


Hands-on with Postman
Create an external client app and obtain an access token to use in Postman for executing
GraphQL queries.
End point for GraphQL query:
https://yourDomainName.my.salesforce.com/services/data/v59.0/graphql
Header:
Key: Authorization value: Bearer access_token
Key: X-Chatter-Entity-Encoding value: false


SOQL query:
[SELECT Id, Name, Type, BillingStreet, BillingCity, BillingState, BillingPostalCode,
BillingCountry, BillingLatitude, BillingLongitude, BillingGeocodeAccuracy, Phone, Rating,
OwnerId, CreatedDate, CreatedById,
LastModifiedDate, LastModifiedById
FROM Account]

GraphQl query:
query {
uiapi {
query {
Account {
edges {
node {
Id
Name { value }
Type { value }
BillingStreet { value }
BillingCity { value }
BillingState { value }
BillingPostalCode { value }
BillingCountry { value }
BillingLatitude { value }
BillingLongitude { value }
BillingGeocodeAccuracy { value }
Phone { value }
Rating { value }
Owner {
Id
Name { value }
}
CreatedDate { value }
CreatedBy {
Id
Name { value }
}
LastModifiedDate { value }
LastModifiedBy {
Id
Name { value }
}
}
}
}
}
}
}
