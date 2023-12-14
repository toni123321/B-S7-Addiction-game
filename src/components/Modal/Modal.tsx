import "./Modal.css";

interface IInput {
  className: string;
}

function Modal({ className }: IInput) {
  return (
    <div className={`modal ${className}`}>
      <h2 className="title">Recovery Journey</h2>
      <div className="description">
        Finally, Jules embarks on his recovery journey. He begins therapy,
        attends 12-step meetings, and embraces a spiritual journey towards
        sobriety. This phase involves self-discovery, dealing with loss, and
        continuously seeking growth, ultimately leading his to a place of
        self-acceptance and confidence. Jules’ story reflects not just the
        struggle with addiction but also the resilience and courage it takes to
        reclaim one's life and identity in the face of such challenges.
      </div>
    </div>
  );
}
export default Modal;
