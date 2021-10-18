#
# IAM Roles managed that you can use for the purpose of the DEMO
# A Role is a set of permission you can give to a service in AWS 
# to allow access only the resources it needs (least priviledges)
#

data "aws_iam_role" "managed_lambda_role" {
  name = "ws-managed-lambda-role"
}

data "aws_iam_role" "managed_appsync_role" {
  name = "ws-managed-appsync-role"
}
