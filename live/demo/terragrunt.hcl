include {
  path = find_in_parent_folders()
}

locals {
  globals = jsondecode(file(find_in_parent_folders("globals.json")))  
}

#
# Dependency from "managed" modules, so we can use output variables
# of that module as input variables
#
dependency "managed" {
  config_path = "../managed"

  mock_outputs = {
    lambda_role = ""
    appsync_role = ""
    tags = ""
    userid = ""
  }

  mock_outputs_allowed_terraform_commands = [
    "init", 
    "validate",
    "plan"
  ]
}

inputs = {
  account_id = get_aws_account_id()
  student = get_env("OWNER", local.globals.student)
  region = get_env("REGION", local.globals.region)
  env = get_env("ENV", local.globals.env)
  project = get_env("PROJECT", local.globals.project)

  lambda_role = dependency.managed.outputs.lambda_role
  appsync_role = dependency.managed.outputs.appsync_role
  tags = dependency.managed.outputs.tags
  userid = dependency.managed.outputs.userid
}


