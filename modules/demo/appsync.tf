resource "aws_appsync_graphql_api" "demo" {
  name   = "${var.userid}-${var.student}-${lower(var.project)}-demo"
  schema = file("./graphql/schema.graphql")

  authentication_type = "API_KEY"
  
  tags = var.tags
}

resource "aws_appsync_api_key" "demo" {
  api_id  = aws_appsync_graphql_api.demo.id
  expires = "2021-11-20T04:00:00Z"
}

# -------------------- DATA SOURCE --------------------
resource "aws_appsync_datasource" "lambda_source" {
  api_id           = aws_appsync_graphql_api.demo.id
  name             = replace(lower("${var.userid}_${var.project}_demo_lambda_handler"), "-", "_")
  type             = "AWS_LAMBDA"
  service_role_arn = var.appsync_role.arn
  lambda_config {
    function_arn = aws_lambda_function.api_handler.arn
  }
}
