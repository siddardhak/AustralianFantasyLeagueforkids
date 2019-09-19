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
        sh '''sudo usermod --a -G docker $user
npm start'''
      }
    }
  }
}