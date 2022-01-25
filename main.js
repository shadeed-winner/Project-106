function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rC4g47ub8/model.json');
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log('Got Results')
}