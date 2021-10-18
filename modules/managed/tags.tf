# 
# AWS Resources can have tags for management reasons 
# They are defined here so that we can use them directly
# in other resources
# 
locals {
  tags = {
    Env  = var.env
    Student = var.student
    Project = var.project
  }
}
