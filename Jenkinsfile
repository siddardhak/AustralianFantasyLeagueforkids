pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run') {
      steps {
        sh '''sudo docker -d run mongo:latest
npm start'''
      }
    }
  }
}