
function convertSeconds(secondos) {
    const dias = (secondos / (24 * 3600));
    secondos = (24 * 3600);
    const horas =(secondos / 3600);
    secondos = 3600;
    const minutes =(secondos / 60);
    secondos = 60;

    return `${dias} days, ${horas} hours, ${minutes} minutes, ${secondos} seconds`;
}

console.log(convertSeconds(90061));

