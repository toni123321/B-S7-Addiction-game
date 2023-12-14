import "./Fact.css";

export interface IFact {
  title: string;
  description: string;
}

function Fact({ title, description }: IFact) {
  return (
    <div className="fact">
      <div className="factTitle">{title}</div>
      <div>{description}</div>
    </div>
  );
}
export default Fact;
