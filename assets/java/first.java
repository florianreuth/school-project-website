/*
This project is licensed under the MIT License.
See the LICENSE file in the project root for details.

Copyright (c) 2024-2026 Florian Reuth <git@florianreuth.de>
*/

package example;

public final class ExampleApplication {

    // Globale Variable
    private static final double SQUARE_ROOT = Math.sqrt(2);

    public static void main(String[] args) {
        // Dies ist ein Kommentar
        final String text = "Dies ist ein Beispieltext";
        
        // Lokale Variablen
        final int a = 50;
        final int b = 10;

        if (a != b) {
            System.out.println("A und B sind ungleich");
        } else {
            System.out.println("A und B sind gleich");
        }
    }
}
