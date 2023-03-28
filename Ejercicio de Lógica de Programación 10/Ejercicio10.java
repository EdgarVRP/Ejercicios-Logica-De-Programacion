import java.util.HashMap;
import java.util.Scanner;

public class Ejercicio10 {
    public static void main(String[] args) {
        // Diccionario español-inglés con 20 palabras usando hashmap
        HashMap<String, String> diccionario = new HashMap<String, String>();
        diccionario.put("hola", "hello");
        diccionario.put("adios", "goodbye");
        diccionario.put("perro", "dog");
        diccionario.put("gato", "cat");
        diccionario.put("casa", "house");
        diccionario.put("mesa", "table");
        diccionario.put("silla", "chair");
        diccionario.put("ventana", "window");
        diccionario.put("puerta", "door");
        diccionario.put("teclado", "keyboard");
        diccionario.put("ratón", "mouse");
        diccionario.put("monitor", "monitor");
        diccionario.put("ordenador", "computer");
        diccionario.put("libro", "book");
        diccionario.put("papel", "paper");
        diccionario.put("lapiz", "pencil");
        diccionario.put("boligrafo", "pen");
        diccionario.put("tijeras", "scissors");
        diccionario.put("regla", "ruler");
        diccionario.put("cuaderno", "notebook");
        Scanner sc = new Scanner(System.in);
        System.out.println("Introduce una palabra en español: ");
        String palabra = sc.nextLine();
        sc.close();
        // Comprobamos si la palabra está en el diccionario
        if (diccionario.containsKey(palabra)) {
            System.out.println("La traducción de " + palabra + " es " + diccionario.get(palabra));
        } else {
            System.out.println("La palabra " + palabra + " no está en el diccionario");
        }
    }
}
