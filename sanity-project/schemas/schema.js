import createSchema from "part:@sanity/base/schema-creator"
import spiceProducts from "./spiceProducts"

import schemaTypes from "all:part:@sanity/base/schema-type"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([spiceProducts]),
})
