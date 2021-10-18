output "lambda_role" {
  value = data.aws_iam_role.managed_lambda_role
}

output "appsync_role" {
  value = data.aws_iam_role.managed_appsync_role
}

output "tags" {
  value = local.tags
}

data "aws_caller_identity" "current" {}
output "userid" {
  value = data.aws_caller_identity.current.user_id
}
