import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.GRAPHQL_URL;
console.log(API_URL);

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}


async function fetchAPI(query, variables = {}) {

  // console.log(query);
  const headers = { 'Accept': 'application/json' };
    const res = await fetch(API_URL, {
      method: 'POST',
      body: query
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
    // console.log(json);
    return json;
  }

  export async function getAllActivities(role:string) {
    // console.log(`roles are ${role}`);
    const data = await fetchAPI(`
    {
      Tasks 
      { Ref, 
        Role, 
        PERT, 
        Var, 
        Activity
        StdDev
        Optimistic
        Likely
        Pesimistic
       }
    }
    `, null);

    // console.log(data);
    return data;
  }

  export async function getComparisonTraditionalCrypto() { 

    // console.log(`roles are ${role}`);
    const data = await fetchAPI(`
    {
      CompareExchange
      { Feature
        Traditional
        Crypto
       }
    }
    `, null);

    // console.log(data);
    return data;
   }
  
  export async function getFIXStandards() { 

    // console.log(`roles are ${role}`);
    const data = await fetchAPI(`
    {
      FIXStandards
      { Name
        Link
        Abbreviation
        Goal
       }
    }
    `, null);

    // console.log(data);
    return data;
   }

   export async function getCryptoStandards() { 

    // console.log(`roles are ${role}`);
    const data = await fetchAPI(`
    {
      CryptoStandards
      { Name
        Link
        Abbreviation
        Goal
       }
    }
    `, null);

    // console.log(data);
    return data;
   }

   export async function getAllRoles() { 

    // console.log(`roles are ${role}`);
    const data = await fetchAPI(`
    {
      Roles
      { 
        Name
        Abbreviation
       }
    }
    `, null);

    // console.log(data);
    return data;
   }