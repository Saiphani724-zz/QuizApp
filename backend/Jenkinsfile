pipeline {
    agent any {
        stages {
            stage('Build') {
                steps {
                    echo 'Starting Build'
                    checkout scm
                    sh 'docker-compose build'
                    sh 'docker-compose up'
                    echo 'BUILT THE CONTAINERS!!'
                


                }
                stage('Test') {
                    steps {
                        sh 'cd SE_SAMPLE_TESTS'
                        sh 'npm run test'

                    }
                }
                stage('Deploy')
                steps {
                    
                }


            }
        }
    }
}