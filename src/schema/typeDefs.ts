const typeDefs = `#graphql

  type Entry {
    id: ID
    name: String
    phone: String
    service: String
    category: String
    date: String
    time: String
  }

  type Query {
    getEntries: [Entry]
  }

  type ResponseEntry {
    id: ID,
    date: String, 
    time: String
  }

  type Mutation {
    pushEntry(
    name: String, 
    phone: String, 
    service: String, 
    category: String, 
    date: String, 
    time: String): ResponseEntry
  }

`;

export default typeDefs
