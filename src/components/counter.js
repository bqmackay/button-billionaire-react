import {useEffect} from "react";

function Counter({score, setScore, employees}) {
  useEffect(() => {
    let interval = setInterval(() => {
      let extraClicks = employees.map(e => {
        return e.count * e.click_multiplier
      }).reduce((acc, cur) => acc + cur, 0)
      setScore(score + extraClicks)
    }, 1000)

    return () => {
        clearInterval(interval);
        interval = null;
      };
  })

  return (
    <>
    </>
  );
}

export default Counter;
