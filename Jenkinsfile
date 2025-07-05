pipeline {
  agent any
  environment {
    DOCKER_IMAGE = "jcoben/jarvis"
    K8S_NAMESPACE = "default"
    KUBECONFIG_CRED_IT = "kubeconfig"
  }
  stages {
    stage('Clone Repository') {
      steps {
        git 'git@github.com:jcoben/jarvis.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("jcoben/jarvis:v2")
        }
      }
    }
    stage('Push to Docker Hub') {
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'docker-creds') {
            dockerImage.push()
          }
        }
      }
    }
    stage('Update Kubernetes Deployment') {
      steps {
        script {
          sh 'kubectl rollout restart deployment/jarvis-deployment'
        }
      }
    }
  }
}
