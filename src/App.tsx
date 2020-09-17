import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

type USERS = typeof Data;

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username = "Hello";
let dummyNum = 2;
let bool = true;

let array1 = [true, false, true];
let array = [0, 1, "hewllo"];

interface NAME {
  first: string;
  last?: string | null;
}

let nameObj: NAME = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

//IntersectionTypes
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "tokyo",
  username: "yugo",
  password: "password",
};

//UnionTypes
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";
// comapny = "apple";

let memory: 256 | 512;
memory = 512;
// memory = 12;

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
// msg2 = 2;

let animal = { cat: "small cat" };
let newAnima: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
// key = "primar";

//typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

//enum
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

//肩の互換性
const comp1 = "test";
let comp2: string = comp1;

// let comp3: string = "test";
// let comp4: "test" = comp3;

// let funcComp1 = (x: number) => {};
// let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2;
// funcComp2 = funcComp1;

//Generics ジェネリクス
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" };
const gen2: GEN<number> = { item: 12 };

interface GEN1<T = string> {
  item: T;
}

const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}

const gen4: GEN2<string> = { item: "hello" };
const gen5: GEN2<number> = { item: 12 };
// const gen6: GEN2<boolean> = { item: true };

function funcGen<T>(props: T) {
  return { item: props };
}

const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}

const gen8 = funcGen1("hello");
// const gen9 = funcGen1(123);

interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
};

export default App;
