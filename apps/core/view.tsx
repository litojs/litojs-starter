import { Form } from "litojs/components";

export const Fruit = ({ fruit }: { fruit: string }) => {
  return <li>{fruit}</li>;
};

interface MyFruitProps {
  fruits: string[];
}

export const MyFruits = ({ fruits }: MyFruitProps) => {
  return (
    <div>
      <h1>My favorite fruits:</h1>

      <ul id="fruits">
        {fruits.map((fruit) => {
          return <li>{fruit}</li>;
        })}
      </ul>

      <Form
        method="POST"
        url="/hello"
        responseBehavior="replace"
        target="#fruits"
      >
        <button>Get my new fruit</button>
      </Form>
    </div>
  );
};
