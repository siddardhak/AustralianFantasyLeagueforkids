pipeline {
  environment {
    PATH = "$PATH:/snap/bin/docker-compose"
  }
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sudo docker-compose up'
      }
    }
  }
  
}
