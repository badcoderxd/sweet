import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Header from '@/components/common/Header';
import { LoadingButton } from '@mui/lab';
import * as Babel from '@babel/standalone';
const CodeEditor = () => {
    const  language = "javascript"; 

    const [theme, setTheme] = useState("light");
    const [languageState, setLanguageState] = useState('');
    const [isEditorReady, setIsEditorReady] = useState(false);

    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(null);

    console.log(code,"code")
    // Output:

    // 

    useEffect(()=>{
      setLanguageState(language)
      setCode(`console.log("Hello From Coding Treat")`)
      setOutput("Click on RUN button to see the output")
    },[language])

    const handleRunCode = () => {
      try {
        // Reset output and error
        setOutput('');
        setError(null);
  
        // Transpile modern JavaScript code (e.g., ES6 or JSX) to browser-compatible code
        const transpiledCode = Babel.transform(code, { presets: ['env'] }).code;
  
        // Capture the console.log output
        const originalLog = console.log;
        let capturedOutput = '';
        console.log = (message) => {
          capturedOutput += message + '\n';
        };
  
        // Run the transpiled code
        eval(transpiledCode);
  
        // Reset console.log after execution
        console.log = originalLog;
  
        // Set captured output to state
        setOutput(capturedOutput);
      } catch (err) {
        // Handle errors
        setError(`Error: ${err.message}`);
      }
    };

  return (
    <>
    <Header/>
    <div>
      <div style={{display:"flex", width:"100%", height:"96vh"}}>
         <div style={{flexBasis:"50%"}}>  
            <Editor 
              height="100vh" // By default, it fully fits with its parent
              theme={theme}
              language={languageState}
            //  width={"50%"}
              // loading={<Loader />}
              value={code}
              onChange={(newValue) => setCode(newValue)}
              //editorDidMount={handleEditorDidMount}
            />
         </div>
         <div style={{flexBasis:"50%"}}>
            <div style={{display:"flex",width:"100%", justifyContent:"flex-end"}}>
              <LoadingButton onClick={handleRunCode} sx={{mr:8, background:"green", color:"white", "&:hover":{background:"green"}}}>RUN</LoadingButton>
            </div>
            <div>
              <h3>Output:</h3>
              {error ? <pre className="error">{error}</pre> : <pre>{output}</pre>}
            </div>
         </div>
      </div>
  </div>
  </>
)
}

export default CodeEditor;