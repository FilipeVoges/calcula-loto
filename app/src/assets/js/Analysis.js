console.log("Analysis.js was loaded successfully");

/*
 * Responsible for creating a json with all results of the selected lottery
 * @author Filipe Voges
 * @returns {Void}
 */
function getDataResults(){
    var i = 1;
    var isFinal = false;
    while (!isFinal) {
        var url = 'https://www.lotodicas.com.br/api/mega-sena/'+ i;
        $.getJSON(url , function(data) {
            console.log(data);
            isFinal = true;
        });
        i++;
    }

}

/*
 * Responsible for initiating the analysis of the results data to predict a possible future result
 * @author Filipe Voges
 * @returns {Void}
 */
function initAnalysis(){

}
