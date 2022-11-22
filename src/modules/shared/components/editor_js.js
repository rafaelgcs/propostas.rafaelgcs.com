import React, { useEffect } from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../tools/editor_js_tools";
import "./editor_js.css";

const EditorJS = (props) => {
    const { onChange, readOnly, data, holder } = props;
    const dataDefault = {
        time: 1556098174501,
        blocks: [
            {
                type: "paragraph",
                data: {
                    text:
                        "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                }
            },
        ],
        version: "2.12.4"
    }
    useEffect(() => { console.log(data) }, [])
    return (
        <EditorJs
            tools={EDITOR_JS_TOOLS}
            data={data ? data : dataDefault}
            readOnly={readOnly ? (readOnly == true || readOnly == false) ? readOnly : true : false}
            onChange={(_, data) => onChange && onChange(data)}
            holder={holder ? holder : "place"}
        >
            <div id={holder ? holder : "place"} className="place__editor" />
        </EditorJs>
    )
}

export default EditorJS;