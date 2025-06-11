
// FibonacciSeries using loop

function FibonacciSeries (num){ 
    let a = 0;
    let b = 1;
    for (let i = 0; i<num ; i++){
        console.log(a) // print first number 
        c=a+b;  // adding two number 
        a = b;   // change number 
        b = c ;

    }
}
FibonacciSeries(10) 