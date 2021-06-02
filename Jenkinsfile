pipeline {
    /* insert Declarative Pipeline here */
    agent any
    stages {
        stage('Deploy/Build application') {
            steps {
                sh '''
                  echo 'Application deployed successfully!'
                  '''
            }
        }
                stage('Frontend tests') {
            steps {
                sh '''
                  cd automation-assignment-frontend-master/frontend-tests/
                  pwd
                  ls -lart
                  npm install && npm run test:vrt
                  '''
                  archiveArtifacts allowEmptyArchive: true, artifacts: 'automation-assignment-frontend-master/frontend-tests/cypress/videos/**', followSymlinks: false

                  publishHTML([
                      allowMissing: false, 
                      alwaysLinkToLastBuild: false, 
                      keepAll: false,
                      reportDir: 'automation-assignment-frontend-master/frontend-tests/mochawesome-report',
                      reportFiles: 'mochawesome.html', 
                      reportName: 'Frontend Report',
                      reportTitles: ''
                      ])
            }
        }
                   stage('Backend tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
                stage('Performance tests') {
            steps {
                sh '''
                    cd performance-assignment-kristina-master/performance-test
                    rm test1.csv -Rf && rm html-reports/ -Rf
                    jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                      allowMissing: false, 
                      alwaysLinkToLastBuild: false, 
                      keepAll: false,
                      reportDir: 'performance-assignment-kristina-master/performance-test/html-reports',
                      reportFiles: 'index.html', 
                      reportName: 'JMeter dashboard Performance Report',
                      reportTitles: ''
                ])
            }
        }
    }
}
