pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-intermediate-app"
        COMMIT_SHA = "${GIT_COMMIT}"
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
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $IMAGE_NAME:$COMMIT_SHA ."
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                    docker stop intermediate-app || true
                    docker rm intermediate-app || true
                    docker run -d -p 8082:8080 --name intermediate-app $IMAGE_NAME:$COMMIT_SHA
                    '''
                }
            }
        }

        stage('Cleanup Old Images') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful!"
        }
        failure {
            echo "❌ Something went wrong."
        }
    }
}
