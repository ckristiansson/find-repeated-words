# Kattis Challenge Problem A
## Find repeating words

This is a program that prompt the user for an input and alerts "no" if input has repeating words.
Alerts "Yes" if no words are repeated

Firstly, the program split the user input into an array. Secondly, it loops through the array, starting with the first word and matches it with each of the other words of the input. If the program find two words that are matching it will increase a counter that represent the total number of times any word has been repeated.

Due to the program matching the word with _ALL_ other words of the sentence, it will naturally be matched with itself. Therefore, the program will only alert a "no" once the counter representing repeating words reaches 2.