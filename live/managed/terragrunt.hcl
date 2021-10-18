include {
  path = find_in_parent_folders()
}

locals {
  globals = jsondecode(file(find_in_parent_folders("globals.json")))  
}

# Input variables to pass to the terraform code

inputs = {
  account_id = get_aws_account_id()
  student = get_env("STUDENT", local.globals.student)
  region = get_env("REGION", local.globals.region)
  env = get_env("ENV", local.globals.env)
  project = get_env("PROJECT", local.globals.project)
}