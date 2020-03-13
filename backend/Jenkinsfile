node('node') {
    currentBuild.result = "SUCCESS"
    try {
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
    catch (err) {
        currentBuild.result = "FAILURE"

    }
    
 }


