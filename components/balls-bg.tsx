export const BallsBg = () => {
    return (
      <div className="bouncing-balls">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="ball"></div>
        ))}
      </div>
    );
  };
  