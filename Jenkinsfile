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
        stage('Using Input'){
            steps {
                input("Do you want to proceed? Huh?")
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