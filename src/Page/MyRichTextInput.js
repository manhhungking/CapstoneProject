import {
  DefaultEditorOptions,
  RichTextInput,
  RichTextInputToolbar,
  LevelSelect,
  FormatButtons,
  AlignmentButtons,
  ListButtons,
  LinkButtons,
  QuoteButtons,
  ClearButtons,
  useTiptapEditor,
  ColorButtons,
  ImageButtons,
} from "ra-input-rich-text";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Remove from "@mui/icons-material/Remove";
import { ToggleButton, IconButton } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
const MyRichTextInputToolbar = ({ size, ...props }) => {
  const editor = useTiptapEditor();
  return (
    <RichTextInputToolbar {...props}>
      <LevelSelect size={size} />
      <FormatButtons size={size} />
      <ColorButtons size={size} />
      <AlignmentButtons size={size} />
      <ListButtons size={size} />
      <LinkButtons size={size} />
      <ImageButtons size={size} />
      <QuoteButtons size={size} />
      <ClearButtons size={size} />
      <ToggleButton
        aria-label="Add an horizontal rule"
        title="Add an horizontal rule"
        value="left"
        onClick={() =>
          editor
            .chain()
            .focus()
            .setHorizontalRule()
            .run()
        }
        selected={editor && editor.isActive("horizontalRule")}
      >
        <Remove fontSize="inherit" />
      </ToggleButton>
      <IconButton
        aria-label="addFormula"
        color="primary"
        onClick={() => props.handleClickOpenDialog(props.idx)}
      >
        <FunctionsIcon />
      </IconButton>
    </RichTextInputToolbar>
  );
};
const MyEditorOptions = {
  ...DefaultEditorOptions,
  extensions: [...DefaultEditorOptions.extensions, HorizontalRule],
};
export const MyRichTextInput = ({ size, ...props }) => (
  <RichTextInput
    id={props.i}
    key={props.i}
    source=""
    label={props.label}
    editorOptions={MyEditorOptions}
    toolbar={
      <MyRichTextInputToolbar
        size={size}
        idx={props.i}
        handleClickOpenDialog={props.handleClickOpenDialog}
      />
    }
    defaultValue={props.value}
    className="RichTextContentEdit"
  />
);
{
  /* <RichTextInput
                              id={"questionText".concat(
                                i
                              )}
                              key={i}
                              source=""
                              editorOptions={
                                MyEditorOptions
                              }
                              toolbar={
                                <MyRichTextInputToolbar
                                  size="medium"
                                  idx={i}
                                />
                              }
                              defaultValue={
                                questionList[i]
                                  .questionText
                              }
                              className="RichTextContentEdit"
                            /> */
}
