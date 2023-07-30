import React from 'react';
import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
interface Props extends React.PropsWithChildren{
    css: string
}
export default function CodeView(props: Props) {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );
    return <section>
        <div className='code_view'>
            <Editor
                value={props.css}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                }}
            />
        </div>
        <div className='effect'>
            {props.children}
        </div>
    </section>
}