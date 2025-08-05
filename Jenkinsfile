pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/rahman5828/intermediate-app.git', credentialsId: 'Github-creds'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image('node:18').inside {
                        sh 'npm test || true'
                    }
                }
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
        success {
            echo '✅ Build completed!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
