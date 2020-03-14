pipeline {
    agent any
    
    stages{
        stage('Checkout'){
            steps {
                    sh 'rm -rf QuizApp'
                    echo 'Starting Build'
                    sh 'git clone https://github.com/Saiphani724/QuizApp.git'
                    sh 'cd QuizApp'
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
        always(){
            cleanWs()
        }
    }
    
 }


