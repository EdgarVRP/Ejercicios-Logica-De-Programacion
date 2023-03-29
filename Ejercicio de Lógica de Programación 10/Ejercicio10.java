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
        int correcto = 0;
        int incorrecto = 0;
        for (int i = 0; i < 5; i++) {
            // Selecciona una palabra aleatoria del diccionario
            int random = (int) (Math.random() * diccionario.size());
            String palabra = (String) diccionario.keySet().toArray()[random];
            System.out.println("Traduce la palabra " + palabra);
            String traduccion = sc.nextLine().toLowerCase();
            // Comprueba si la traducción es correcta
            if (traduccion.equals(diccionario.get(palabra))) {
                System.out.println("Correcto");
                correcto++;
            } else {
                System.out.println("Incorrecto");
                incorrecto++;
                System.out.println("La traducción correcta es " + diccionario.get(palabra));
            }

        }
        sc.close();
        System.out.println("Has acertado " + correcto + " palabras");
        System.out.println("Has fallado " + incorrecto + " palabras");
    }
}