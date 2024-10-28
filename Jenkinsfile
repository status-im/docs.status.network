#!/usr/bin/env groovy
library 'status-jenkins-lib@v1.9.13'

pipeline {
  agent { label 'linux' }

  options {
    disableConcurrentBuilds()
    /* manage how many builds we keep */
    buildDiscarder(logRotator(
      numToKeepStr: '20',
      daysToKeepStr: '30',
    ))
  }

  environment {
    GIT_COMMITTER_NAME = 'status-im-auto'
    GIT_COMMITTER_EMAIL = 'auto@status.im'
  }

  stages {
    stage('Install') {
      steps {
        script {
            nix.develop('yarn install')
        }
      }
    }

    stage('Build') {
      steps {
        script {
          nix.develop('yarn build')
          jenkins.genBuildMetaJSON('build/build.json')
        }
      }
    }

    stage('Publish') {
      steps {
        sshagent(credentials: ['status-im-auto-ssh']) {
          script {
            nix.develop("""
                ghp-import \
                -b deploy-master \
                -c docs.status.network \
                -p build
                """, 
                pure: false
            )
          }
        }
      }
    }
  }

  post {
    cleanup { cleanWs() }
  }
}