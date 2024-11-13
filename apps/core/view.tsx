export const MyFruit = ({ fruits }: { fruits: string[] }) => {
  return (
    <div>
      My favorite fruits:{" "}
      {fruits.map((fruit) => {
        return <div style={{ background: "red" }}>{fruit}</div>;
      })}
    </div>
  );
};
