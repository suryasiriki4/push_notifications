var push = require('web-push');

let vapidKeys = {
  publicKey: 'BA_8sSbrhjxFx--UroWU6z-5PBaIyQnUBL4ROX0ieD7GCAKkbtQ_5DS8FWGbcwaGWuMYNKERCjqD7pa0LeV0k8E',
  privateKey: '3cXge2y3Nm6IEBFrKjMRpkSfjHVz2J5A0ZYQgzj6lDM'
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.privateKey, vapidKeys.privateKey);



push.sendNotification(sub, 'test message');