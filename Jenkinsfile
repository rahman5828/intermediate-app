pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/rahman5828/intermediate-app.git'
            }
        }

        stage('Pull Node Docker Image') {
            steps {
                bat 'docker pull node:18'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'docker run --rm -v "%cd%:/app" -w /app node:18 npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'docker run --rm -v "%cd%:/app" -w /app node:18 npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t intermediate-app .'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deployment stage (to be implemented)'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully.'
        }
        failure {
            echo '❌ Build failed. Check logs above.'
        }
    }
}
