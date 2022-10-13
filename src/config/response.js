const response = {}
response['Success'] = {
  response : 200,
  code : 'success',
  message : 'Success'
}
response['Error'] = {
  response : 500,
  code : 'error',
  message : 'Error'
}
response['Created'] = {
  response : 201,
  code : 'created',
  message : 'Created'
}
response['NotFound'] = {
  response : 404,
  code : 'notfound',
  message : 'Not Found'
}
response['Unauthorized'] = {
  response : 401,
  code : 'Unauthorized',
  message : 'Unauthorized.'
}
response['ParameterNotFound'] = {
  response : 400,
  code : 'parameter_not_found',
  message : 'Parameter not complete.'
}
module.exports = response