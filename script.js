const a1 = "Chcąc przeprowadzić ciekawe i efektywne zajęcia językowe, lektor musi się do nich rzetelnie przygotować. Aby lekcja przebiegała sprawnie i efektywnie wspomagała rozwój umiejętności językowych korzystam z najnowszych podręczników i pomocy dydaktycznych. Zajęcia opracowuję w oparciu o aktualne materiały audio i video, które sama wyszukuję i opracowuję pod moich uczniów. Na zajęciach korzystamy z kart, fiszek, kostek, w które regularnie doposażam studio językowe. Uczniowie mają również do biblioteczki, z której mogą darmowo wypożyczać anglojęzyczne książki lub czasopisma. Po zajęciach sprawdzam zadania domowe, prace pisemne oraz pozostaję do dyspozycji moich uczniów mailowo i telefonicznie. Podsumowując: na koszt zajęć składa się czas poświęcony na przygotowanie się do zajęć, czas przeznaczony na przeprowadzenie zajęć, koszt pomocy edukacyjnych i materiałów, czas przeznaczony na poprawę prac domowych, konsultacje telefoniczne/online. W tym miejscu chciałabym wspomnieć";
const a2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus dui sit amet sollicitudin accumsan. Integer feugiat dui a ex finibus, eu feugiat erat hendrerit. Cras mollis tincidunt tincidunt. Morbi ligula est, sodales nec pretium at, mollis eu mauris. Aliquam non est venenatis ipsum hendrerit ullamcorper. Phasellus sed arcu sed lacus tincidunt semper non at tortor. Cras nec laoreet tortor. Maecenas mollis ligula eu augue consequat ullamcorper. Donec fermentum justo est, in vulputate arcu dictum sed.";
const a3 = "Donec mi eros, auctor ac luctus tempus, tincidunt in sem. Aliquam erat volutpat. Cras ac sapien id urna pretium finibus. Aliquam pellentesque magna ipsum, vel sodales magna viverra non. Aliquam quis nisi gravida, feugiat leo in, tempus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean non sagittis diam, sed tempor odio. Proin id tempus enim. Nullam eget vulputate erat. Vivamus sapien tellus, tincidunt at tellus sed, accumsan venenatis velit.";

const answersArr = [a1, a2, a3];

function back() {
    var duration = 3000;
    var answer = document.getElementById("answer");
    var backBtn = document.getElementById("back");
    var paragraph = answer.childNodes[0];
    answer.style.animationName = "hide";
    answer.style.animationDuration = "3s";
    backBtn.style.animationName = "hide";
    backBtn.style.animationDuration = "3s";
    setTimeout(hideHTMLElement, duration, answer);
    setTimeout(hideHTMLElement, duration, backBtn);
    setTimeout(removeChild, duration, paragraph);
}

function showAnswer(obj) {
    var backBtn = $("#back");
    var answerContainer = $("#answer");
    var question = obj.id;
    var answerString = getAnswer(question);
    var paragraph = document.createElement("p");
    var textNode = document.createTextNode(answerString);
    var questionList = document.getElementById("question-list").children;
    paragraph.appendChild(textNode);
    answerContainer.appendChild(paragraph);
     
    answer.style.animationName = "show";
    answer.style.animationDuration = "5s";
    answer.style.visibility = "visible";
    // backBtn.style.animationDelay = "2s";
    backBtn.style.animationName = "show";
    backBtn.style.animationDuration = "5s";
    backBtn.style.visibility = "visible";
}

function getAnswer(question) {
    switch (question) {
        case "a1": 
            return answersArr[0];
        case "a2":
            return answersArr[1];
        case "a3":
            return answersArr[2];    
        default:
            return undefined;    
    }
}

function removeChild(element) {
    if (element.hasChildNodes) {
        element.remove();
    }
}

function hideHTMLElement(element) {
    element.style.visibility = "hidden";
}

function displayNoneHTMLElement(element) {
    element.style.display = "none";
}


// 3d animated containers


