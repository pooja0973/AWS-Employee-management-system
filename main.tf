terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.2.0"
}



provider "aws" {
  region  = var.region
 //your secret key and access key
  access_key = "AKIAWXZKU7RAEW624GA2"
  secret_key = "y1vJp9PdTzoqxttalMJYd+pDkF7fasl4PjXTyUL4"

  
}


