data "aws_iam_role" "managed_lambda_role" {
  name = "ws-managed-lambda-role"
}

data "aws_iam_role" "managed_appsync_role" {
  name = "ws-managed-appsync-role"
}
