output "lambda_role" {
  value = data.aws_iam_role.managed_lambda_role
}

output "appsync_role" {
  value = data.aws_iam_role.managed_appsync_role
}
