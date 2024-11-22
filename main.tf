# Define the AWS provider
provider "aws" {
  region = "eu-central-1"  # Replace with your preferred Free Tier eligible region
}

# Define a security group to allow SSH and HTTP traffic
resource "aws_security_group" "ec2_sg" {
  name        = "free-tier-ec2-security-group"
  description = "Allow SSH and HTTP traffic"

  ingress {
    from_port   = 22                   # Allow SSH
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]        # Allow from all IPs (adjust for security if needed)
  }

  ingress {
    from_port   = 3000                   # Allow HTTP
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"                 # Allow all outbound traffic
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Define an EC2 instance within the Free Tier
resource "aws_instance" "free_tier_ec2" {
  ami           = "ami-0592c673f0b1e7665"  # Amazon Linux 2 AMI for eu-central-1
  instance_type = "t2.micro"               # Free Tier eligible instance type
  key_name      = "ec2_free_tier"  # Reference to the key pair created above
  security_groups = [aws_security_group.ec2_sg.name]

  # User data to install Docker and run your Docker image
  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y docker
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sleep 10
              sudo docker pull hashanalam/health-system-frontend:latest
              sudo docker run -d -p 3000:3000 hashanalam/health-system-frontend:latest
              EOF

  tags = {
    Name = "Free-Tier-EC2-Instance"
  }
}

# Output the public IP of the instance
output "ec2_public_ip" {
  description = "The public IP address of the EC2 instance"
  value       = aws_instance.free_tier_ec2.public_ip
}
