
      
      //funciones matematicas 
        function sumar (a,b){
            return a + b;
        }

        function restar(a,b){
            return a - b;
        }
        function multiplicacion (a,b){
            return a * b;
        }
        function division (a,b){
            return a / b;
        }

        //Funcion Calculadora
        function Calculadora (n1, n2, operacion){
            switch (operacion) {
                case "sumar":
                    return sumar(n1,n2);
                case"restar":
                    return restar(n1,n2);
                case"multiplicacion":
                    return multiplicacion(n1,n2);
                case"division":
                    return division(n1,n2);
                default:
                    return "Operación no Valida....";
            }
        }
        let numero1=parseFloat(prompt("Ingrese el primer numero: "));
        let numero2=parseFloat(prompt("Ingrese el segundo numero: "));
        let operacion=prompt("Ingrese la operacion (sumar, restar, multiplicacion, division)");

        let resultado=Calculadora(numero1,numero2,operacion);

        console.log("El resultado es: "+ resultado);
        document.white("El resultado es: "+ resultado);


