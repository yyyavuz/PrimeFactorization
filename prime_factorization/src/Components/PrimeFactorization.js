import React, { useState, useEffect } from "react";

export default function PrimeFactorization() {
  const [value, setValue] = useState();
  
    const printPrime = e => {
    console.log(e.target.value)
    var primes = [];
        for(var i = 2; i < e.target.value; i++) {
            primes[i] = true;
        }
    var limit = Math.sqrt(e.target.value);
        for(var i = 2; i < limit; i++) {
            if(primes[i] === true) {
                for(var j = i * i; j < e.target.value; j += i) {
                    primes[j] = false;
                }
            }
        }
        for(var i = 2; i < e.target.value; i++) {
            if(primes[i] === true) {
                setValue (i)
                console.log(i + " " + primes[i]);
            }
        }
    }

    useEffect(() => {
    document.title = value;
    console.log(value)
    }, [value]);

  return (
    <div className="PrimeFactorization">
      <h3>PrimeFactorization</h3>
      <input  placeholder="Enter number" onChange={printPrime}/>
      <p>Closest Prime Number: {value}</p>
    </div>
  );
}