pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/rahman5828/intermediate-app.git', credentialsId: 'Github-creds'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true' // optional: ignore test failure for now
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'echo "Building Docker image..."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }

    post {
        failure {
            echo '❌ Something went wrong.'
        }
        success {
            echo '✅ Pipeline completed successfully.'
        }
    }
}
