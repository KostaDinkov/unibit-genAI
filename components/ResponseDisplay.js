// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    content = (
      <>
        
        <p>Description: {data.result.ideaDescription}</p>
        <p>Target audience: {data.result.targetAudience}</p>
        <p>Market opportunity: {data.result.marketOpportunity}</p>
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
