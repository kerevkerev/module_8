let x = 1;
if (typeof x == "number") {
    console.log(`${x} - число`)
}
else if (typeof x == "string") {
    console.log(`${x} - строка`)
}
else if (typeof x == "boolean") {
    console.log(`${x} - boolean`)
}
else{
    console.log(`Тип ${x} не определен`)

}