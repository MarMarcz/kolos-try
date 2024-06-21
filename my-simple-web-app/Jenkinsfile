pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/MarMarcz/kolos-try'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'npm start &'
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'test-results.xml'
                }
            }
        }

        stage('Lint Code') {
            steps {
                sh 'npm run lint'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
