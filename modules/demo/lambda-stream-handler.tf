resource "aws_lambda_function" "stream_handler" {
  filename         = "${path.module}/lambda/stream-handler-build.zip"
  function_name    = "${var.userid}-${var.student}-${var.project}-stream-handler"
  role             = var.lambda_role.arn
  source_code_hash = data.archive_file.stream_handler.output_base64sha256
  handler          = "src/index.handler"
  runtime          = "nodejs14.x"
  timeout          = 3

  tags = var.tags

  environment {
    variables = {
      DYNAMO_TABLE = aws_dynamodb_table.demo.id
    }
  }
}

resource "null_resource" "yarn_install_stream_handler" {
  triggers = {
    timestamp = timestamp()
  }

  provisioner "local-exec" {
    working_dir = "${path.module}/lambda/stream-handler"
    command     = "yarn --frozen-lockfile --mutex network"
  }
}

data "archive_file" "stream_handler" {
  type        = "zip"
  source_dir  = "${path.module}/lambda/stream-handler/"
  output_path = "${path.module}/lambda/stream-handler-build.zip"

  depends_on = [
    null_resource.yarn_install_stream_handler
  ]
}

# -------------- DynamoDB Streams --------------
resource "aws_lambda_event_source_mapping" "dynamodb_stream" {
  event_source_arn  = aws_dynamodb_table.demo.stream_arn
  function_name     = aws_lambda_function.stream_handler.function_name
  starting_position = "LATEST"
  maximum_retry_attempts = 0
  maximum_record_age_in_seconds = 180

  depends_on = [
    aws_dynamodb_table.demo
  ]
}
