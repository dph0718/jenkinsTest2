pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Execute TestCafe'){
            steps {
                // input("Do you want to proceed? Huh?")
                bat "npm -v"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo "I'm having the time of my life!"
            }
        }
    }
}