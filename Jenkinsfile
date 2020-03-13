pipeline {
    agent any
    
    stages{
        stage('Checkout'){
            steps {
                    echo 'Starting Build'
                    checkout scm
                    sh 'npm install -y'
                    sh 'docker-compose build'
                    sh 'docker-compose up'
                    echo 'BUILT THE CONTAINERS!!'
                


                }
        }
        stage('Test') {
             steps {
                        sh 'npm install -y'
                        sh 'jasmine'

                    }

        }
        stage('deploy'){
            steps {
            echo "Environment will be: test"
            }

        }
    }
    
 }


