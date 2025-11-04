import { LightningElement,wire } from 'lwc';
import { graphql, gql } from 'lightning/uiGraphQLApi';

export default class GraphqlDemo extends LightningElement {
@wire(graphql,{
    query: gql `query Accounts{
    uiapi{
    query{
    Account{
    edges{
    node{
    Id
    Name{ value }
    Phone{ value }
    Owner{
    Id
    Name{ value }
    }
    CreatedBy{
    Id
    Name{ value }
    }
    }
    }
    }
    }
    }
    }`,
})
grapgQlResult({data,errors}){
    if(data){
        console.log('GraphQL Account Result:'+JSON.stringify(data));
        console.log('GraphQL uiapi Account Result:'+JSON.stringify(data.uiapi.query.Account.edges));
        for(let i=0;i<data.uiapi.query.Account.edges.length;i++)
            console.log('Detailed about Account: Name: '+data.uiapi.query.Account.edges[i].node.Name.value+" Phone: "+data.uiapi.query.Account.edges[i].node.Phone.value+" Owner: "+data.uiapi.query.Account.edges[i].node.Owner.Name.value);
    }

}

}