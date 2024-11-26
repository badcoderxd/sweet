import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Header from '@/components/common/Header';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
const CodeEditor = () => {
    const  language = "python"; 

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
setCode(
`public class Temp {
    public static void main(String[] args) {
        System.out.println("Hello World from Cooking treat");
    }
}`)
      setOutput("Click on RUN button to see the output")
    },[language])

    const handleRunCode = async () => {
      try {
        // Reset output and error
        setOutput('');
        setError(null);
       
        const res = await axios.post("https://codingtreat.com/api/execute", {
            language: "java",
            code: code,
        })
        // Capture the console.log output
        const originalLog = res.data.output
  
        // Set captured output to state
        setOutput(originalLog);
      } catch (err) {
        // Handle errors
        console.log(err)
        setError(`Error: ${err.response.data.error}`);
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