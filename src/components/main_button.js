function MainButton({score, setScore, employees}) {
  return (
    <div>
      <button onClick={ evt => {
        const tempScore = score + 1;
        setScore(tempScore)}}>
            Press me!</button>
      <p>
        Money: ${score}
      </p>
    </div>
  );
}

export default MainButton;
