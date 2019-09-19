pipeline {
  environment {
        PATH = "$PATH:/snap/bin/docker-compose"
    }
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'which docker-compose'
      }
    }
  }
}
