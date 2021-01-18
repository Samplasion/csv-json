import React from 'react';
import FilePicker from './components/FilePicker';
import CSV from 'csvtojson';
import JSONbeautify from 'json-beautify';
import DropZone from './components/DropZone';
import Nav from './components/Nav';
import Prism from "prismjs";

function downloadFile(name: string, data: string) {
    const blob = new Blob([data], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\.[^.]*/, "")}.json`;
    a.click();
}

function App() {
    // const { files, onClick, HiddenFileInput } = useFilePicker();
    const [file, setFile] = React.useState<File | null>(null);
    const [result, setResult] = React.useState("");
    const [preview, setPreview] = React.useState(false);
    const [converting, setConverting] = React.useState(false);

    async function convertFile(file?: File | null) {
        if (!file)
            return;

        setConverting(true);
        const converted = await CSV().fromString(await file.text());
        console.log(file.name, converted);
        const stringified = JSONbeautify(converted, null as any, 4, 80);
        // downloadFile(file.name.replace(/\.csv$/, ""), stringified);
        setResult(stringified);
        setConverting(false);
        Prism.highlightAll();
    }

    function dl() {
        if (!file)
            return;
        downloadFile(file.name.replace(/\.csv$/, ""), result);
    }

    return (
        <>
            <Nav />
            {/* <HiddenFileInput accept=".csv" multiple={false} /> */}
            {/* <FilePicker onClick={onClick} name={files?.length ? files[0].name : "No file selected."} /> */}
            <div className="justify-center flex">
                <div className="container px-4">
                <h1 className="text-2xl">Simple CSV to JSON converter</h1>
                <h2 className="pb-4 dark:text-gray-400 text-gray-700">Simply click below or drag a CSV file to begin the conversion of your file.</h2>
                    <DropZone accept=".csv" onDrop={files => {
                        if (files?.length) {
                            setFile(files[0]);
                            convertFile(files[0]);
                        }
                    }} />
                    <div className="flex lg:flex-wrap flex-col-reverse lg:flex-row lg:justify-end my-4">
                        <button className="btn mt-2 lg:mt-0 lg:mr-2" disabled={!file || converting} onClick={() => setPreview(!preview)}>Preview</button>
                        <button className="btn primary" disabled={!file || converting} onClick={() => dl()}>Download!</button>
                    </div>
                    <div className={"h-64 resize-y overflow-scroll " + (preview ? "block" : "hidden")}><pre><code className="language-js">{result}</code></pre></div>
                </div>
            </div>
        </>
    );
}

Prism.highlightAll();

export default App;
