locals {
  globals = jsondecode(file("./globals.json"))
}

remote_state {
  backend = "s3"
  config = {
    encrypt        = true
    bucket         = "${local.globals.env}-${local.globals.student}-terraform-state"
    key            = "${path_relative_to_include()}/terraform.tfstate"
    region         = local.globals.region
    dynamodb_table = "${local.globals.env}-${local.globals.student}-terraform-state"
  }
}

terraform {
  source = "${path_relative_from_include()}/../modules/${path_relative_to_include()}"
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite"
  contents = <<EOF
  provider "aws" {
    region = "${local.globals.region}"
  }
  provider "aws" {
    alias  = "virginia"
    region = "us-east-1"
  }
  EOF
}

generate "backend" {
  path      = "backend.tf"
  if_exists = "overwrite"
  contents = <<EOF
  terraform {
    backend "s3" {}
  }
  EOF
}