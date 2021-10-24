# 
#  USERS 
# 
resource "aws_appsync_resolver" "add_user" {
  type              = "Mutation"
  api_id            = aws_appsync_graphql_api.demo.id
  field             = "addUser"
  request_template  = data.template_file.add_user.rendered
  response_template = file("${path.module}/resolvers/lambda_proxy.res.vtl")
  data_source       = aws_appsync_datasource.lambda_source.name
  kind              = "UNIT"
}

data "template_file" "add_user" {
  template = file("${path.module}/resolvers/lambda_proxy.req.vtl")
  vars = {
    field = "addUser"
  }
}

resource "aws_appsync_resolver" "delete_user" {
  type              = "Mutation"
  api_id            = aws_appsync_graphql_api.demo.id
  field             = "deleteUser"
  request_template  = data.template_file.delete_user.rendered
  response_template = file("${path.module}/resolvers/lambda_proxy.res.vtl")
  data_source       = aws_appsync_datasource.lambda_source.name
  kind              = "UNIT"
}

data "template_file" "delete_user" {
  template = file("${path.module}/resolvers/lambda_proxy.req.vtl")
  vars = {
    field = "deleteUser"
  }
}

# 
#  TASKS 
# 

resource "aws_appsync_resolver" "add_task" {
  type              = "Mutation"
  api_id            = aws_appsync_graphql_api.demo.id
  field             = "addTask"
  request_template  = data.template_file.add_task.rendered
  response_template = file("${path.module}/resolvers/lambda_proxy.res.vtl")
  data_source       = aws_appsync_datasource.lambda_source.name
  kind              = "UNIT"
}

data "template_file" "add_task" {
  template = file("${path.module}/resolvers/lambda_proxy.req.vtl")
  vars = {
    field = "addTask"
  }
}

resource "aws_appsync_resolver" "delete_task" {
  type              = "Mutation"
  api_id            = aws_appsync_graphql_api.demo.id
  field             = "deleteTask"
  request_template  = data.template_file.delete_task.rendered
  response_template = file("${path.module}/resolvers/lambda_proxy.res.vtl")
  data_source       = aws_appsync_datasource.lambda_source.name
  kind              = "UNIT"
}

data "template_file" "delete_task" {
  template = file("${path.module}/resolvers/lambda_proxy.req.vtl")
  vars = {
    field = "deleteTask"
  }
}