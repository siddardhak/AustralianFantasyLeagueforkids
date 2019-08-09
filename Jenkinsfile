pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        node(label: 'npm') {
          sh 'npm install'
        }

      }
    }
    stage('Run') {
      steps {
        sh 'npm start'
      }
    }
  }
}