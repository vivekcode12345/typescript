function wrapInArray<T>(value: T): T[] {
    return [value];
}

wrapInArray("hello"); // string[]
wrapInArray(42); // number[]
wrapInArray({ name: "Alice" });

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("hello", 42);
pair({ name: "Alice" }, [1, 2, 3]);

interface BOX<T> {
    content: T;
}

const stringBox: BOX<string> = { content: "hello" };
const numberBox: BOX<number> = { content: 42 };

