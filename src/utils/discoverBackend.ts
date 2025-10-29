import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

// GraphQL Introspection Query to discover available queries
const INTROSPECTION_QUERY = gql`
  query IntrospectionQuery {
    __schema {
      queryType {
        fields {
          name
          description
          args {
            name
            type {
              name
              kind
            }
          }
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
`;

export const discoverBackendQueries = async () => {
  try {
    const { data } = await client.query({
      query: INTROSPECTION_QUERY,
      fetchPolicy: "no-cache",
    });
    
    console.log("=== AVAILABLE BACKEND QUERIES ===");
    data.__schema.queryType.fields.forEach((field: { 
      name: string; 
      description?: string; 
      args?: Array<{ name: string }>; 
      type: { name?: string; ofType?: { name?: string } } 
    }) => {
      console.log(`\n📌 Query: ${field.name}`);
      if (field.description) {
        console.log(`   Description: ${field.description}`);
      }
      if (field.args && field.args.length > 0) {
        console.log(`   Arguments:`, field.args.map((arg) => arg.name).join(', '));
      }
      console.log(`   Returns: ${field.type.name || field.type.ofType?.name || 'Unknown'}`);
    });
    
    return data.__schema.queryType.fields;
  } catch (error) {
    console.error("Error discovering backend:", error);
    return [];
  }
};

