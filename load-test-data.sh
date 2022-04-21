#!/bin/bash
cd src/assets/data || { echo "Error accessing assets data folder."; exit 1; }

read -r -p 'Enter the aws profile to use: [default] ' aws_profile
if [ -z "$aws_profile" ]
then
  aws_profile="default"
fi

echo "Loading 'Locations' data..."
aws dynamodb batch-write-item --request-items file://1_LocationsData.json --profile "$aws_profile" 1> /dev/null

echo "Loading 'Companies' data..."
aws dynamodb batch-write-item --request-items file://2_CompaniesData01.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://2_CompaniesData02.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://2_CompaniesData03.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://2_CompaniesData04.json --profile "$aws_profile" 1> /dev/null

echo "Loading 'Open Positions' data..."
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData01.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData02.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData03.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData04.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData05.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData06.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData07.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData08.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData09.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData10.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData11.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData12.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData13.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData14.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData15.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData16.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData17.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData18.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData19.json --profile "$aws_profile" 1> /dev/null
aws dynamodb batch-write-item --request-items file://3_OpenPositionsData20.json --profile "$aws_profile" 1> /dev/null

echo "Done!"
