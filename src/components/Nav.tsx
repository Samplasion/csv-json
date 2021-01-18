import React from "react";

export default function Nav() {
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-green-500 dark:bg-green-700 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                            href="#"
                        >
                            CSV to JSON
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}