let ratings = ['G', 'PG', 'R'];


let metric = 'replacement_cost';

function meanrep (listofmovies,rating,metric){
    let count = 0;
    let total = 0;

    for (let x = 0; x<listofmovies.length;x++){
        row = listofmovies[x];
        if (row.rating == rating){
            total += row[metric];
            count +=1;
        }
    }

    let mean = total/count;
    return mean;
}



let G = meanrep(films,'G',metric);
let PG = meanrep(films,'PG', metric);
let R = meanrep(films,'R',metric);


console.log(G);

let array1 = [G,PG,R];


function plot (ratings,array){


    trace1 = {
        x:ratings,
        y:array,
        type:'bar'
    };
    
    let data = [trace1];
    
    let layout = {
        title: 'LFG'
    };

    Plotly.newPlot('plot',data,layout);




}

plot(ratings,array1)



//Plotly.newPlot('plot',dat)

// Create a function to calculate the average of a metric by rating
//let metric = 'replacement_cost';
//unction mean(film,rating,metric) {
  //  let count = 0;
   // let total = 0;


   // for (let x = 0; x<film.length; x++){

  //      row = film[x];

   //     if (row.rating = rating){
     //       total += row[metric];
     //       count +=1;
    //    }
   // }
   // let meanValue = total/count;
  //  return meanValue;
//}
// Invoke the metric average function
//let metricG = mean(films, 'G', metric);
//let metricPG = mean(films, 'PG', metric);
////let metricPG13 = mean(films,'PG-13', metric);
//let metricR = mean(films,'R', metric);

////let array = [metricG, metricPG, metricPG13, metricR];


//function plot (array,ratings, metric) {
    //let trace1 = {
   //     x: ratings,
   //     y: array,
   //     type:'bar'
  //  }
  //  let data = [trace1]

   // let layout = {
  //      title: `Pagila Rental Films Average ${metric}`
  //  };
//
  ////  Plotly.newPlot('plot',data,layout);
//}

// Create a function to plot the average metric by rating results

//plot(array,ratings,metric)
// Invoke the plot creating function
