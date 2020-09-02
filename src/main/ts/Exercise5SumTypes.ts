/*
Sum Types

Most programmers are familiar with classes, objects, structs, records etc, which essentially take a bunch of values
and combine them into a single value.

e.g. if I have a Person:
 */
interface Person {
  readonly personName: string,
  readonly personAge: number
}

const personName: string = "Fred";
const personAge: number = 3;

const fred: Person = ({ personName, personAge });

/*
So, you can see that a Person comprises a string (name) and a number (age).
Emphasis on the AND. A Person is a string AND a number.
You need both a string and a number to construct a Person.

So, that's AND, but what about OR?

How do I model if I may have one value OR another?
 */

