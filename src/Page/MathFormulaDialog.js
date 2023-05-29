import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
export function MathFormulaDialog({ ...props }) {
  const [equation, setEquation] = useState("");
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleCloseDialog}
      disablebackdropclick="true"
    >
      <div
        style={{ padding: 16, fontFamily: "sans-serif", textAlign: "center" }}
      >
        <TextField
          helperText="Please enter your formula"
          id="demo-helper-text-aligned"
          label="Formula"
          onChange={(event) => {
            console.log("Value: ", event.target.value);
            setEquation("`".concat(event.target.value).concat("`"));
          }}
        />
        <div style={{ marginBottom: "5px" }}>Preview:</div>
        <MathJaxContext config={config}>
          <MathJax inline dynamic>
            
          
            {equation}
          </MathJax>
        </MathJaxContext>
      </div>
      <DialogActions>
        <Button
          onClick={() => {
            props.handleCloseDialog(null);
            setEquation("");
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.handleCloseDialog(equation);
            setEquation("");
          }}
        >
          Insert
        </Button>
      </DialogActions>
    </Dialog>
  );
}
