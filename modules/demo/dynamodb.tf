resource "aws_dynamodb_table" "demo" {
  name         = "${var.student}-${var.project}-demo-table"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key     = "EntityRef" // Partition Key
  range_key    = "EntityID"  // Sort Key

  # Dynamo Streams option
  stream_enabled = true
  stream_view_type = "NEW_AND_OLD_IMAGES"

  attribute {
    name = "EntityRef"
    type = "S"
  }

  attribute {
    name = "EntityID"
    type = "S"
  }

  ttl {
    enabled = true
    attribute_name = "expiration"
  }

  tags = var.tags
}
