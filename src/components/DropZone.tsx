import React from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import "./DropZone.css";

const DropZone = ({ onDrop, accept }: { onDrop: (<T extends File>(files: T[], event: DropEvent) => void), accept: string }) => {

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        onDropAccepted: onDrop,
        accept
    });

    return (
        <div {...getRootProps()} className={"ripple waves-light DropZone" + (isDragActive ? " active" : "")}>
            <input className="dropzone-input" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                    <p className="dropzone-content">Release to drop the files here</p>
                ) : (
                        <p className="dropzone-content">
                            {
                                acceptedFiles?.length ? acceptedFiles[0].name :
                                "Drag and drop some files here, or click to select files"
                            }
                        </p>
                    )}
            </div>
        </div>
    );
};

export default DropZone;