import 'reflect-metadata';
import { Product } from "./product.model";

const p1 = new Product("A book", 12.99);

console.log(p1.getInfo());
