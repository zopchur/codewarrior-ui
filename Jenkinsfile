pipeline {
    agent any
    tools { 
        maven "mvn" 
        jdk "jdk8"
        dockerTool 'docker'
    }
    stages {
        
        stage ('create docker image') {
            steps {
                sh 'docker build -t codewarriorui .'
            }
        }
    }
}