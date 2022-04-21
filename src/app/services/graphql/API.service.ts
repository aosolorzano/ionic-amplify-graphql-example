/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateLocationInput = {
  id?: string | null;
  country: string;
  flagImageUrl: string;
};

export type ModelLocationConditionInput = {
  flagImageUrl?: ModelStringInput | null;
  and?: Array<ModelLocationConditionInput | null> | null;
  or?: Array<ModelLocationConditionInput | null> | null;
  not?: ModelLocationConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Location = {
  __typename: "Location";
  id: string;
  country: string;
  flagImageUrl: string;
};

export type UpdateLocationInput = {
  id: string;
  country: string;
  flagImageUrl?: string | null;
};

export type DeleteLocationInput = {
  id: string;
  country: string;
};

export type CreateCompanyInput = {
  id?: string | null;
  locationId: string;
  city: string;
  name: string;
  industry: string;
  url: string;
};

export type ModelCompanyConditionInput = {
  city?: ModelStringInput | null;
  name?: ModelStringInput | null;
  industry?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  locationId: string;
  city: string;
  name: string;
  industry: string;
  url: string;
  location?: Location | null;
};

export type UpdateCompanyInput = {
  id: string;
  locationId: string;
  city?: string | null;
  name?: string | null;
  industry?: string | null;
  url?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
  locationId: string;
};

export type CreateOpenPositionInput = {
  id?: string | null;
  companyId: string;
  title: string;
  seniority: string;
  field: string;
  skills: string;
};

export type ModelOpenPositionConditionInput = {
  title?: ModelStringInput | null;
  seniority?: ModelStringInput | null;
  field?: ModelStringInput | null;
  skills?: ModelStringInput | null;
  and?: Array<ModelOpenPositionConditionInput | null> | null;
  or?: Array<ModelOpenPositionConditionInput | null> | null;
  not?: ModelOpenPositionConditionInput | null;
};

export type OpenPosition = {
  __typename: "OpenPosition";
  id: string;
  companyId: string;
  title: string;
  seniority: string;
  field: string;
  skills: string;
  company?: Company | null;
};

export type UpdateOpenPositionInput = {
  id: string;
  companyId: string;
  title?: string | null;
  seniority?: string | null;
  field?: string | null;
  skills?: string | null;
};

export type DeleteOpenPositionInput = {
  id: string;
  companyId: string;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null;
  country?: ModelIDInput | null;
  flagImageUrl?: ModelStringInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection";
  items: Array<Location | null>;
  nextToken?: string | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  locationId?: ModelIDInput | null;
  city?: ModelStringInput | null;
  name?: ModelStringInput | null;
  industry?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
};

export type ModelOpenPositionFilterInput = {
  id?: ModelIDInput | null;
  companyId?: ModelIDInput | null;
  title?: ModelStringInput | null;
  seniority?: ModelStringInput | null;
  field?: ModelStringInput | null;
  skills?: ModelStringInput | null;
  and?: Array<ModelOpenPositionFilterInput | null> | null;
  or?: Array<ModelOpenPositionFilterInput | null> | null;
  not?: ModelOpenPositionFilterInput | null;
};

export type ModelOpenPositionConnection = {
  __typename: "ModelOpenPositionConnection";
  items: Array<OpenPosition | null>;
  nextToken?: string | null;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  country: string;
  flagImageUrl: string;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  country: string;
  flagImageUrl: string;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  country: string;
  flagImageUrl: string;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  locationId: string;
  city: string;
  name: string;
  industry: string;
  url: string;
  location?: {
    __typename: "Location";
    id: string;
    country: string;
    flagImageUrl: string;
  } | null;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  locationId: string;
  city: string;
  name: string;
  industry: string;
  url: string;
  location?: {
    __typename: "Location";
    id: string;
    country: string;
    flagImageUrl: string;
  } | null;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  locationId: string;
  city: string;
  name: string;
  industry: string;
  url: string;
  location?: {
    __typename: "Location";
    id: string;
    country: string;
    flagImageUrl: string;
  } | null;
};

export type CreateOpenPositionMutation = {
  __typename: "OpenPosition";
  id: string;
  companyId: string;
  title: string;
  seniority: string;
  field: string;
  skills: string;
  company?: {
    __typename: "Company";
    id: string;
    locationId: string;
    city: string;
    name: string;
    industry: string;
    url: string;
    location?: {
      __typename: "Location";
      id: string;
      country: string;
      flagImageUrl: string;
    } | null;
  } | null;
};

export type UpdateOpenPositionMutation = {
  __typename: "OpenPosition";
  id: string;
  companyId: string;
  title: string;
  seniority: string;
  field: string;
  skills: string;
  company?: {
    __typename: "Company";
    id: string;
    locationId: string;
    city: string;
    name: string;
    industry: string;
    url: string;
    location?: {
      __typename: "Location";
      id: string;
      country: string;
      flagImageUrl: string;
    } | null;
  } | null;
};

export type DeleteOpenPositionMutation = {
  __typename: "OpenPosition";
  id: string;
  companyId: string;
  title: string;
  seniority: string;
  field: string;
  skills: string;
  company?: {
    __typename: "Company";
    id: string;
    locationId: string;
    city: string;
    name: string;
    industry: string;
    url: string;
    location?: {
      __typename: "Location";
      id: string;
      country: string;
      flagImageUrl: string;
    } | null;
  } | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  country: string;
  flagImageUrl: string;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    country: string;
    flagImageUrl: string;
  } | null>;
  nextToken?: string | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  locationId: string;
  city: string;
  name: string;
  industry: string;
  url: string;
  location?: {
    __typename: "Location";
    id: string;
    country: string;
    flagImageUrl: string;
  } | null;
};

export type ListCompaniesQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    locationId: string;
    city: string;
    name: string;
    industry: string;
    url: string;
    location?: {
      __typename: "Location";
      id: string;
      country: string;
      flagImageUrl: string;
    } | null;
  } | null>;
  nextToken?: string | null;
};

export type GetOpenPositionQuery = {
  __typename: "OpenPosition";
  id: string;
  companyId: string;
  title: string;
  seniority: string;
  field: string;
  skills: string;
  company?: {
    __typename: "Company";
    id: string;
    locationId: string;
    city: string;
    name: string;
    industry: string;
    url: string;
    location?: {
      __typename: "Location";
      id: string;
      country: string;
      flagImageUrl: string;
    } | null;
  } | null;
};

export type ListOpenPositionsQuery = {
  __typename: "ModelOpenPositionConnection";
  items: Array<{
    __typename: "OpenPosition";
    id: string;
    companyId: string;
    title: string;
    seniority: string;
    field: string;
    skills: string;
    company?: {
      __typename: "Company";
      id: string;
      locationId: string;
      city: string;
      name: string;
      industry: string;
      url: string;
    } | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCompaniesByLocationIdQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    locationId: string;
    city: string;
    name: string;
    industry: string;
    url: string;
    location?: {
      __typename: "Location";
      id: string;
      country: string;
      flagImageUrl: string;
    } | null;
  } | null>;
  nextToken?: string | null;
};

export type GetOpenPositionsByCompanyIdQuery = {
  __typename: "ModelOpenPositionConnection";
  items: Array<{
    __typename: "OpenPosition";
    id: string;
    companyId: string;
    title: string;
    seniority: string;
    field: string;
    skills: string;
    company?: {
      __typename: "Company";
      id: string;
      locationId: string;
      city: string;
      name: string;
      industry: string;
      url: string;
    } | null;
  } | null>;
  nextToken?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateLocation(
    input: CreateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!, $condition: ModelLocationConditionInput) {
        createLocation(input: $input, condition: $condition) {
          __typename
          id
          country
          flagImageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!, $condition: ModelLocationConditionInput) {
        updateLocation(input: $input, condition: $condition) {
          __typename
          id
          country
          flagImageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput,
    condition?: ModelLocationConditionInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!, $condition: ModelLocationConditionInput) {
        deleteLocation(input: $input, condition: $condition) {
          __typename
          id
          country
          flagImageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          locationId
          city
          name
          industry
          url
          location {
            __typename
            id
            country
            flagImageUrl
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          locationId
          city
          name
          industry
          url
          location {
            __typename
            id
            country
            flagImageUrl
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          locationId
          city
          name
          industry
          url
          location {
            __typename
            id
            country
            flagImageUrl
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async CreateOpenPosition(
    input: CreateOpenPositionInput,
    condition?: ModelOpenPositionConditionInput
  ): Promise<CreateOpenPositionMutation> {
    const statement = `mutation CreateOpenPosition($input: CreateOpenPositionInput!, $condition: ModelOpenPositionConditionInput) {
        createOpenPosition(input: $input, condition: $condition) {
          __typename
          id
          companyId
          title
          seniority
          field
          skills
          company {
            __typename
            id
            locationId
            city
            name
            industry
            url
            location {
              __typename
              id
              country
              flagImageUrl
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOpenPositionMutation>response.data.createOpenPosition;
  }
  async UpdateOpenPosition(
    input: UpdateOpenPositionInput,
    condition?: ModelOpenPositionConditionInput
  ): Promise<UpdateOpenPositionMutation> {
    const statement = `mutation UpdateOpenPosition($input: UpdateOpenPositionInput!, $condition: ModelOpenPositionConditionInput) {
        updateOpenPosition(input: $input, condition: $condition) {
          __typename
          id
          companyId
          title
          seniority
          field
          skills
          company {
            __typename
            id
            locationId
            city
            name
            industry
            url
            location {
              __typename
              id
              country
              flagImageUrl
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOpenPositionMutation>response.data.updateOpenPosition;
  }
  async DeleteOpenPosition(
    input: DeleteOpenPositionInput,
    condition?: ModelOpenPositionConditionInput
  ): Promise<DeleteOpenPositionMutation> {
    const statement = `mutation DeleteOpenPosition($input: DeleteOpenPositionInput!, $condition: ModelOpenPositionConditionInput) {
        deleteOpenPosition(input: $input, condition: $condition) {
          __typename
          id
          companyId
          title
          seniority
          field
          skills
          company {
            __typename
            id
            locationId
            city
            name
            industry
            url
            location {
              __typename
              id
              country
              flagImageUrl
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOpenPositionMutation>response.data.deleteOpenPosition;
  }
  async GetLocation(id: string, country: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!, $country: ID!) {
        getLocation(id: $id, country: $country) {
          __typename
          id
          country
          flagImageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      country
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    id?: string,
    country?: ModelIDKeyConditionInput,
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($id: ID, $country: ModelIDKeyConditionInput, $filter: ModelLocationFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listLocations(id: $id, country: $country, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            country
            flagImageUrl
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (country) {
      gqlAPIServiceArguments.country = country;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async GetCompany(id: string, locationId: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!, $locationId: ID!) {
        getCompany(id: $id, locationId: $locationId) {
          __typename
          id
          locationId
          city
          name
          industry
          url
          location {
            __typename
            id
            country
            flagImageUrl
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      locationId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanies(
    id?: string,
    locationId?: ModelIDKeyConditionInput,
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCompaniesQuery> {
    const statement = `query ListCompanies($id: ID, $locationId: ModelIDKeyConditionInput, $filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCompanies(id: $id, locationId: $locationId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            locationId
            city
            name
            industry
            url
            location {
              __typename
              id
              country
              flagImageUrl
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (locationId) {
      gqlAPIServiceArguments.locationId = locationId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompaniesQuery>response.data.listCompanies;
  }
  async GetOpenPosition(
    id: string,
    companyId: string
  ): Promise<GetOpenPositionQuery> {
    const statement = `query GetOpenPosition($id: ID!, $companyId: ID!) {
        getOpenPosition(id: $id, companyId: $companyId) {
          __typename
          id
          companyId
          title
          seniority
          field
          skills
          company {
            __typename
            id
            locationId
            city
            name
            industry
            url
            location {
              __typename
              id
              country
              flagImageUrl
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      companyId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOpenPositionQuery>response.data.getOpenPosition;
  }
  async ListOpenPositions(
    id?: string,
    companyId?: ModelIDKeyConditionInput,
    filter?: ModelOpenPositionFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListOpenPositionsQuery> {
    const statement = `query ListOpenPositions($id: ID, $companyId: ModelIDKeyConditionInput, $filter: ModelOpenPositionFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listOpenPositions(id: $id, companyId: $companyId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            companyId
            title
            seniority
            field
            skills
            company {
              __typename
              id
              locationId
              city
              name
              industry
              url
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (companyId) {
      gqlAPIServiceArguments.companyId = companyId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOpenPositionsQuery>response.data.listOpenPositions;
  }
  async GetCompaniesByLocationId(
    locationId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetCompaniesByLocationIdQuery> {
    const statement = `query GetCompaniesByLocationId($locationId: ID!, $sortDirection: ModelSortDirection, $filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        getCompaniesByLocationId(locationId: $locationId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            locationId
            city
            name
            industry
            url
            location {
              __typename
              id
              country
              flagImageUrl
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      locationId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompaniesByLocationIdQuery>(
      response.data.getCompaniesByLocationId
    );
  }
  async GetOpenPositionsByCompanyId(
    companyId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelOpenPositionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetOpenPositionsByCompanyIdQuery> {
    const statement = `query GetOpenPositionsByCompanyId($companyId: ID!, $sortDirection: ModelSortDirection, $filter: ModelOpenPositionFilterInput, $limit: Int, $nextToken: String) {
        getOpenPositionsByCompanyId(companyId: $companyId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            companyId
            title
            seniority
            field
            skills
            company {
              __typename
              id
              locationId
              city
              name
              industry
              url
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      companyId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOpenPositionsByCompanyIdQuery>(
      response.data.getOpenPositionsByCompanyId
    );
  }
}
