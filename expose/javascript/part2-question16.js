let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const item in statistics) {
    if(item.charAt(0)=='r') {
        console.log(statistics[item]);
    }
    else if(statistics[item] % 2 == 1) {
        console.log(statistics[item]);
    }
}