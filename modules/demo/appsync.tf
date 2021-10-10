resource "aws_appsync_graphql_api" "demo" {
  name   = "${var.student}-${lower(var.project)}-demo"
  schema = file("./graphql/schema.graphql")

  authentication_type = "API_KEY"

  log_config {
    cloudwatch_logs_role_arn = var.appsync_role.arn
    field_log_level          = "ERROR"
  }

  tags = {
    Name    = "${var.student}-${var.project}-demo-api-graphql"
    Env     = var.env
    Student = var.student
    Project = var.project
  }
}

resource "aws_appsync_api_key" "demo" {
  api_id  = aws_appsync_graphql_api.demo.id
  expires = "2021-11-20T04:00:00Z"
}

# -------------------- DATA SOURCE --------------------
# resource "aws_appsync_datasource" "node_lambda_function" {
#   api_id           = aws_appsync_graphql_api.demo
#   name             = replace(lower("${var.student}_${var.project}_demo_lambda_handler"), "-", "_")
#   type             = "AWS_LAMBDA"
#   service_role_arn = ""
#   lambda_config {
#     function_arn = aws_lambda_function.appsync_handler.arn
#   }
# }
