pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''ls
sudo docker build -t siddardhakolanupaka/aflproject'''
      }
    }
  }
  environment {
    PATH = "$PATH:/snap/bin/docker-compose"
  }
}