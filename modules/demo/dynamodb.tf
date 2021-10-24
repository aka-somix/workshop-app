resource "aws_dynamodb_table" "demo" {
  name         = "${var.student}-${var.project}-demo-table"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key     = "EntityRef" // Partition Key
  range_key    = "EntityID"  // Sort Key

  attribute {
    name = "EntityRef"
    type = "S"
  }

  attribute {
    name = "EntityID"
    type = "S"
  }

  tags = var.tags
}
