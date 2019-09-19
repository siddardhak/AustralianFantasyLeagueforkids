pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'which docker-compose'
      }
    }
  }
  environment {
    PATH = "$PATH:/snap/bin/docker-compose"
  }
}