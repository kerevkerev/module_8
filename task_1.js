let value = +prompt("Введите число");
if (typeof value == "number" && value % 2 == 0) {
    alert(`Число "${value}" четное`)
} else if (typeof value == "number" && value % 2 == 1) {
    alert(`Число "${value}" нечетное`)
} else if (isNaN(value)) {
    alert("Упс, кажется, вы ошиблись")
};