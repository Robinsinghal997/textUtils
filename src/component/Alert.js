import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Alert(props) {
  const captalizi = (word)=>{
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
     props.alert&& <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{captalizi(props.alert.type)}</strong> :{props.alert.msg}
</div>
  );
}

export default Alert;
