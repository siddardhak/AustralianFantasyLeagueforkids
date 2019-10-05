pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''ls
npm install
docker build .
sudo rm -rf alianFantasyLeagueforkids_master'''
      }
    }
  }
  environment {
    PATH = "$PATH:/snap/bin/docker-compose"
  }
}
