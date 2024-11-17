interface MyComponentProps {
  fruits: string[];
}

export function MyComponent(props: MyComponentProps) {
  return (
    <div>
      {props.fruits.map((fruit) => (
        <div>{fruit}</div>
      ))}
    </div>
  );
}
