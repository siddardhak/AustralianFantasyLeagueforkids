pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''ls
sudo docker-compose up'''
      }
    }
  }
  environment {
    PATH = "$PATH:/snap/bin/docker-compose"
  }
}