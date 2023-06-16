import entriesResolver from './entries.js'

const resolvers = [entriesResolver].map((resolver) => resolver)
export default resolvers;