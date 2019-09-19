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
        sh '''sudo docker run -d mongo:latest
npm start'''
      }
    }
  }
}