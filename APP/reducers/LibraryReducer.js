//returning a list of objects

import data from './LibraryList.json'

somedata = [{
    name : "name"
}]

export default () => data

//export default () => somedata

// Librarry reducer will return states, which is available for other screens
// refrer -> index.js from reducers and Root.js to see the usage