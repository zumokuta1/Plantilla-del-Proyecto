var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Libro familiar", "Ranbir Singh - Grandfather", "Diljeet Singh - Father", "Alia Singh - Mother", "Rocky Singh - Brother", "Soni Singh - Sister"];

var age = [60, 40, 60, 30, 25, 20]

/*

Debemos ordenar los elementos presentes dentro del array "age" para imrpimir los valores de al edad de cada miembro de la familia.
Escribe: "age.sort()"

*/

age.sort();

/*

Debemos invertir los elementos presentes dentro del array "age" para imprimir el valor de la edad de cada miembro de la familia.
Después de ordenar el array "age", todos los elementos se organizarán en orden ascendente y nuestro libro familiar consistará en la lista opuesta, es decir, el primer miembro será el abuelo, segudio del papá, y así sucesivamente de forma descendente.

Escribe: "age.reverse()"

*/
age.reverse();

var i = 0;

function update() {
    i++;

    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }

    var updatedImage = images[i];

    var updatedName = names[i];

    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;

    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    Para encontrar el valor de la edad máxima o la edad más alta entre los miembros de la familia, necesitamos usar las funciones Math y max para mostrar la edad más alta e imprimir el valor y así usar la consola.

    Escribe:  "var max_number = Math.max .apply(Math, age)
            "console.log("La edad más alta es: ", max_number)"

    */

    var max_number = Math.max.apply(Math, age);
    console.log("La edad más alta es: ", max_number);

    /*

    Para encontrar el valor de la edad mínima o la edad más baja entre los miembros de la familia, necesitamos usar las funciones Math y min para mostrar la edad más alta e imprimir el valor y así usar la consola.

    Escribe:  "var min_number = Math.min.apply(Math, age)
            "console.log("La edad más baja es: ", min_number)"

    */

    var min_number = Math.min.apply(Math, age);
    console.log("La edad más baja es: ", min_number);
}