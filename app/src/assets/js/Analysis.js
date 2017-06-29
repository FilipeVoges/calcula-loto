console.log("Analysis.js was loaded successfully");

/*
 * Responsible for creating a json with all results of the selected lottery
 * @author Filipe Voges
 * @returns {Void}
 */
function getDataResults(){
    $.getJSON('https://www.lotodicas.com.br/api/mega-sena/', function(data){
        var obj = getData(data.numero);
        console.log(obj);
    });

}

function getData(lastGame){
    var i = 1;
    var results =[];
    while (i < lastGame) {
        var url = 'https://www.lotodicas.com.br/api/mega-sena/'+i;
        $.getJSON(url , function(data){
            results.push(criaNewJson(data))
        });
        i++;
    }
    return results;
}

function criaNewJson(data){
    return {
        "game" : data.numero,
        "data" : data.data,
        "Number" : data.sorteio,
        "acumulado" : data.acumulado,
        "nextData" : data.proximo_data
    };
}

/*
 * Responsible for initiating the analysis of the results data to predict a possible future result
 * @author Filipe Voges
 * @returns {Void}
 */
function initAnalysis(){

}
