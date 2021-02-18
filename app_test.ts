import {
    assertEquals,
  } from "https://deno.land/std@0.87.0/testing/asserts.ts";

import { Foo } from './app.ts'

Deno.test('foo returns thing', () => {
    const foo = new Foo("thing");

    assertEquals("thing", foo.getThing())
})