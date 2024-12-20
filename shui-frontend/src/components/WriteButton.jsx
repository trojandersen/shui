import write from "../assets/write.svg";

function WriteButton() {
  return (
    <div className="fixed bottom-10 right-10 z-10">
      <img src={write} alt="writeButton" />
    </div>
  );
}

export default WriteButton;
