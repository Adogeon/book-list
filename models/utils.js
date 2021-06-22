module.exports = {
  objToSql = (obj) => {
    return Object
      .keys(obj)
      .map(key => {
        return `${key} = ${obj[key]}`;
      })
      .toString()
  }
}