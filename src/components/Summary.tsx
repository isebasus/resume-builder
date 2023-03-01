import React from "react";

const Summary = ({content}: { content: string }) => (
    <div className="summary">
        <div className="summary-content">{content}</div>
    </div>
)

export default Summary;