pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'ls'
      }
    }
  }
  environment {
    PATH = "$PATH:/snap/bin/docker-compose"
  }
}