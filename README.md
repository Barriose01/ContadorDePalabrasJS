# ContadorDePalabrasJS
Aplicacion Web para contar las palabras ingresadas 

Al iniciar la aplicacion, aparece lo siguiente:

![image](https://user-images.githubusercontent.com/107152796/196005220-c0f27aa7-56b9-47f4-b84c-4cdaaa176971.png)

Al escribir cualquier cosa en el campo de texto, los valores que aparecen en la parte inferior van a ir cambiando
dependiendo de las palabras que se ingresen:

![image](https://user-images.githubusercontent.com/107152796/196005245-df1d5393-08e6-4862-be90-009c81514b73.png)

Mientras se va escribiendo, se actualiza el numero de palabras ingresadas. Si las palabras que se ingresen son unicas, 
se actualiza el numero de palabras unicas. Si se ingresan palabras repetidas, se actualiza el numero de palabras repetidas.

![image](https://user-images.githubusercontent.com/107152796/196005331-e8c1f09f-2b4b-4a90-b1f3-570fbaa4ca10.png)

En este ejemplo ocurre lo siguiente:

Hay un total de seis palabras, por lo que el total de palabras sera 6.

Las palabras unicas que se ingresaron fueron: "primera", "palabra", "segunda" y "Tercera", por eso nos aparece que el
total de palabras unicas es de 4, a pesar de que la palabra "palabra" se repita varias veces.

La palabra "palabra" se repitio varias veces, pero es la unica palabra que se repitio en todo el texto, es por esto que
nos aparece que el total de palabras repetidas es de 1, a pesar de que esta palabra se repitio tres veces. Esta seccion va
a contar, de manera individual, cada palabra en el texto que se haya repetido, no las veces que se repitio.
