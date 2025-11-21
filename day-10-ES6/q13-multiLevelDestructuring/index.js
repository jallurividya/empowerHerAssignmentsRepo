const people = [ { name: "Alice", 
                   address: { city: "New York", 
                              street: { name: "Broadway", 
                                        number: 123 } } }, 
                 { name: "Bob", 
                   address: { city: "Los Angeles",
                              street: { name: "Sunset Boulevard", 
                                        number: 456 } } } 
               ];
const [{ name : pname, address: {city : pcity, street: {name : streetName}}},
    { name : pname1, address: {city : pcity1, street: {name : streetName1}}}
] = people;
console.log(`["${pname} lives in ${pcity} on ${streetName}, ${pname1} lives in ${pcity1} on ${streetName1}"]`);
