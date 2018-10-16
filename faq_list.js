function onQuestionClick(event){
    if(event.target.nextElementSibling.style.display != "inline-block"){
        event.target.nextElementSibling.style.display = "inline-block";
    }
    else{
        event.target.nextElementSibling.style.display = "none";
    }
}

var list_item_template = "<li id={id} class=question_container /><h3 class=question>{id}: {question}</h3><p id={id} class=answer>{answer}</p></li>"

function insertQuestions(){
    var xmlhttp = new XMLHttpRequest();
    var url = "faq_list.json";
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState ==4 && xmlhttp.status ==200){
            var myJsonObjectArray = JSON.parse(xmlhttp.responseText);
            var html_text = "";
            for(i in myJsonObjectArray){
                var template = list_item_template;
                template = replaceAll(template,"{id}",myJsonObjectArray[i].id);
                template = replaceAll(template,"{question}",myJsonObjectArray.question);
                template = replaceall(template,"{answer}",myJsonObjectArray[i].answer);
                html_text += template;
            }
            document.getElementById("question_list").innerHTML = html_text;
        }
    }
    xmlhttp.open("GET" , url , true);
    xmlhttp.send();
}

function replaceAll(text_string, text_to_replace, replacement_text){
    var result = text_string;
    while(result.search(text_to_replace) != -1){
        result = result.replace(text_to_replace, replacement_text);
    }
    return result;
}

function onClickshowAll(){
    var questions = document.getElementById("question_list").children;
    for(var i = 0; i < questions.length; i++){
        questions[i].children[1].style.display = "inline-block";
    }
}

function onClickHideAll(){
    var questions = document.getElementById("question_list").children;
    for(var i = 0; i < questions.length; i++){
        questions[i].children[1].style.display = "none";
    }
}

