import entriesResolver from './entries.js'
import closedDaysResolver from './closed-days.js'

const resolvers = [entriesResolver, closedDaysResolver].map((resolver) => resolver)
export default resolvers;