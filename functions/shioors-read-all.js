/* code from functions/shioors-read-all.js */
import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  console.log("Function `shioors-read-all` invoked")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_Shioors"))))
  .then((response) => {
    const shioorRefs = response.data
    console.log("Shioor refs", shioorRefs)
    console.log(`${shioorRefs.length} shioors found`)
    // create new query out of Shioor refs. http://bit.ly/2LG3MLg
    const getAllShioorDataQuery = shioorRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllShioorDataQuery).then((ret) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(ret)
      })
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}