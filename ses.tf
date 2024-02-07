resource "aws_ses_email_identity" "source_alert_email" {
  email = "poojaramesh0973@gmail.com"
}

resource "aws_ses_email_identity" "delivery_alert_email" {
  email = "poojaramesh0973@gmail.com"
}