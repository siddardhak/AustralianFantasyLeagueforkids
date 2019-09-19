pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''sudo docker-compose --version
ls
sudo docker-compose up'''
      }
    }
  }
}