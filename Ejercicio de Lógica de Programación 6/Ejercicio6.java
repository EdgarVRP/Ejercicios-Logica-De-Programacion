import java.io.Console;
import java.util.Scanner;

/**
 * Ejercicio6
 */
public class Ejercicio6 {
    public static void main(String[] args) {
        System.out.println("Ejercicio 6");
        System.out.println("Crear un programa en `Java` que realice lo siguiente:");
        System.out.println("- Input");
        System.out.println("  - Solicitar por consola una palabra o frase");
        System.out.println("- Output");
        System.out.println("  - Mostrar por consola el texto ingresado de forma invertida.");

        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese una palabra o frase: ");
        String palabra = scanner.nextLine();
        scanner.close();
        System.out.println("La palabra o frase ingresada es: " + palabra);
        System.out.println("La palabra invertida es: " + new StringBuilder(palabra).reverse().toString());
        // Opcion 2
        String palabrainvertida = "";
        for (int i = palabra.length() - 1; i >= 0; i--) {
            palabrainvertida += palabra.charAt(i);
        }
        System.out.println("(Opcion2) La palabra invertida es: " + palabrainvertida);
    }
}