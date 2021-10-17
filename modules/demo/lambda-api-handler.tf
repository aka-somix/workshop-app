resource "aws_lambda_function" "api_handler" {
  filename         = "${path.module}/lambda/api-handler/build.zip"
  function_name    = "${var.userid}-${var.student}-${var.project}-api-handler"
  role             = var.lambda_role.arn
  source_code_hash = data.archive_file.api_handler.output_base64sha256
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  timeout          = 3

  tags = var.tags

}

resource "null_resource" "yarn_install_api_handler" {
  triggers = {
    timestamp = timestamp()
  }

  provisioner "local-exec" {
    working_dir = "${path.module}/lambda/api-handler"
    command     = "yarn --frozen-lockfile --mutex network"
  }

  provisioner "local-exec" {
    working_dir = "${path.module}/lambda/api-handler"
    command     = "yarn build"
  }
}

data "archive_file" "api_handler" {
  type        = "zip"
  source_dir  = "${path.module}/lambda/api-handler/dist/"
  output_path = "${path.module}/lambda/api-handler/build.zip"

  depends_on = [
    null_resource.yarn_install_api_handler
  ]
}
