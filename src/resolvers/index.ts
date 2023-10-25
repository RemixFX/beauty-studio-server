import entriesResolver from './entries.js'
import closedDaysResolver from './closedDays.js'
import callBackResolver from './callBack.js';

const resolvers = [
  entriesResolver, 
  closedDaysResolver,
  callBackResolver,
].map((resolver) => resolver)
export default resolvers;