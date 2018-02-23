
// app.js
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
//import fr from 'react-intl/locale-data/fr';
//import es from 'react-intl/locale-data/es';


addLocaleData([...en]);
//addLocaleData([...en, ...fr, ...es]);



/*

// We begin by declaring the decorator.
function SimpleDecorator(foo) {
  return (targetClass) => {
    console.log("*** RUNNING DECORATOR", foo, targetClass);

    // We define a new static property
    targetClass.decorated = foo;
    // And a new instance property;
    targetClass.prototype.alsoDecorated = foo;

    return targetClass;
  };
}

function MethodDecorator(target, name, descriptor) {

  console.log("*** METHOD", arguments);

  return descriptor;
}

// Applying the decorator is very easy
@SimpleDecorator('foo')
class SimpleClass {

  @MethodDecorator
  method() { }
}

const instance = new SimpleClass();

console.log(SimpleClass.decorated); // -> true
console.log(instance.alsoDecorated); // -> true
*/
