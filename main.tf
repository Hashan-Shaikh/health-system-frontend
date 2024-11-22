provider "aws" {
  region = "eu-central-1"
}

resource "aws_security_group" "ec2_sg" {
  name        = "free-tier-ec2-security-group"
  description = "Allow SSH and HTTP traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "free_tier_ec2" {
  ami           = "ami-0592c673f0b1e7665"
  instance_type = "t2.micro"
  key_name      = "ec2_free_tier"
  security_groups = [aws_security_group.ec2_sg.name]

  tags = {
    Name = "Free-Tier-EC2-Instance"
  }
}

output "ec2_public_ip" {
  description = "The public IP address of the EC2 instance"
  value       = aws_instance.free_tier_ec2.public_ip
}
