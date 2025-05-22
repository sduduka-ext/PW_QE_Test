import {test,expect} from '@playwright/test'

import { ENV } from "../../utils/env"; 

import { getAuthHeaders } from "../../utils/getHeaders"; 

    test('User Creation ', async ({request}) => {

        const dataPath = `../../src/test-data/tdm_data_enUS.json`;
        const linkData = require(dataPath);
        const CUST_AWS_API = process.env.CUST_AWS_API ;
        const uniqueId = Date.now();

        const respBody=await request.post(''+CUST_AWS_API,
    
        {
            headers: getAuthHeaders(),
            data:{
                user_account: {
                "firstName":linkData.firstName,
                "lastName" :linkData.lastName,
                "username" :`user${uniqueId}`,
                "email" :`email${uniqueId}@beachbodytest.com`,
                "password" :linkData.password,
                "dob" :"1990/10/10",
                "gender" :"Male",
                "customerType" :"REGISTEREDUSER",
                "sponsorREPID" :"7",
                "preferredLanguage" :"en_US",
                "telephoneNumber" :"3108939000",
                "startDate" :"2025/03/07",
                "inputSystem" :"SOA_EBS",
                "billAddress1" :"400 Continental Blvd",
                "billAddress2" :"Ste 400",
                "billCity" :"El Segundo",
                "billState" :"CA",
                "billPostalCode" :"90245",
                "billCountry" :"US",
                "shipAddress1" :"400 Continental Blvd",
                "shipAddress2" :"Ste 400",
                "shipCity" :"El Segundo",
                "shipState" :"CA",
                "shipPostalCode" :"90245",
                "shipCountry" :"US",
                "termAndCondition" :"2025/03/07",
                "preferredProduct" :"BE",

            }

            }
        }

      );

      const text= await respBody.text();

     const body = await respBody.json();


      console.log(body);

      const guid = body.guid;

      console.log('Captured GUID:', guid);
      
     
   
    });

     
