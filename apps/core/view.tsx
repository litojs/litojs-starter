interface MyComponentProps {
  fruits: string[];
}

export function MyComponent(props: MyComponentProps) {
  return (
    <main>
      <h1>My favorite fruits</h1>
      <div>
        {props.fruits.map((fruit) => (
          <div>{fruit}</div>
        ))}
      </div>
    </main>
  );
}
