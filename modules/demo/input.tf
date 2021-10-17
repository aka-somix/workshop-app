variable "student" {
  type = string
}

variable "env" {
  type = string
}

variable "project" {
  type = string
}

variable "region" {
  type = string
}

variable "account_id" {
  type = string
}

variable "lambda_role" {
  type = object({
    id = string,
    arn = string
  })
}

variable "appsync_role" {
  type = object({
    id = string,
    arn = string
  })
}

variable "tags" {
  type = map(string)
}

variable "userid" {
  type = string
}
