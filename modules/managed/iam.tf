data "aws_iam_role" "managed_lambda_role" {
  name = "ws-managed-lambda-role"
}

resource "aws_iam_role" "managed_appsync_role" {
  name = "${var.student}-appsync-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "appsync.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy" "invoke_lambda" {
  name   = "appsync_node_to_lambda"
  role   = aws_iam_role.managed_appsync_role.id
  policy = data.template_file.invoke_lambda.rendered
}
data "template_file" "invoke_lambda" {
  template = file("${path.module}/policies/invokeLambda.json")
  vars = {
    accountid = var.account_id
    userid = data.aws_caller_identity.current.user_id
  }
}
