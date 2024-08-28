interface GreetingProops {
    name: string;
    age: number;
    isStudent: boolean;
  }

const Greeting: React.FC<GreetingProops> = ({name, age, isStudent}) => {

  return(
    <div>
      <h1>Hola, {name}!</h1>
      <p>Age: {age}</p>
      <p>{isStudent? "Bienvenido estudiante" : "Pollo"}</p>
    </div>
  );
};

export default Greeting;