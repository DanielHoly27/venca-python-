let promena1 = 5
let promena2 = 3

function obs_kruh(r){
    if (r > 0){
    
        return 3.14 * (r**2)
    } 
    else{
        return "Zadal jsi nulovou nebo zapornou hodnotu"
    }   
}

function obv_kruh(r){
    if (r > 0)
        {
            return 2*3.14*r
        }
    else
    {
        return "Zadal jsi nulovou nebo zapornou hodnotu"
    }
}

function obs_obv(a,b){
    if ((a > 0) && /b > 0)(
        return a**2 + b**2
    )

    else{
        return "Zadal jsi nulovou nebo zapornou hodnotu"
    }
}