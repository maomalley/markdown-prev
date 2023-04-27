import './App.css';
import {useEffect, useState} from "react";
import { marked } from 'marked'; // markup conversion
import * as DOMPurify from 'dompurify'; // inserting html

// function handleChange(event) {
//     displayText = event.target.value;
// }

function App() {
    // this is the default text. use DOMPurify, then convert to markup.
    const prevText = DOMPurify.sanitize(marked.parse("# Welcome to my React Markdown Previewer!\n" +
        "\n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n" +
        "\n" +
        "Heres some code, `<div></div>`, between 2 backticks.\n" +
        "\n" +
        "```\n" +
        "// this is multi-line code:\n" +
        "\n" +
        "function anotherExample(firstLine, lastLine) {\n" +
        "  if (firstLine == '```' && lastLine == '```') {\n" +
        "    return multiLineCode;\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "You can also make text **bold**... whoa!\n" +
        "Or _italic_.\n" +
        "Or... wait for it... **_both!_**\n" +
        "And feel free to go crazy ~~crossing stuff out~~.\n" +
        "\n" +
        "There's also [links](https://www.freecodecamp.org), and\n" +
        "> Block Quotes!\n" +
        "\n" +
        "And if you want to get really crazy, even tables:\n" +
        "\n" +
        "Wild Header | Crazy Header | Another Header?\n" +
        "------------ | ------------- | -------------\n" +
        "Your content can | be here, and it | can be here....\n" +
        "And here. | Okay. | I think we get it.\n" +
        "\n" +
        "- And of course there are lists.\n" +
        "  - Some are bulleted.\n" +
        "     - With different indentation levels.\n" +
        "        - That look like this.\n" +
        "\n" +
        "\n" +
        "1. And there are numbered lists too.\n" +
        "1. Use just 1s if you want!\n" +
        "1. And last but not least, let's not forget embedded images:\n" +
        "\n" +
        "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"));
    // left preview text
    const leftPrev = "# Welcome to my React Markdown Previewer!\n" +
        "\n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n" +
        "\n" +
        "Heres some code, `<div></div>`, between 2 backticks.\n" +
        "\n" +
        "```\n" +
        "// this is multi-line code:\n" +
        "\n" +
        "function anotherExample(firstLine, lastLine) {\n" +
        "  if (firstLine == '```' && lastLine == '```') {\n" +
        "    return multiLineCode;\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "You can also make text **bold**... whoa!\n" +
        "Or _italic_.\n" +
        "Or... wait for it... **_both!_**\n" +
        "And feel free to go crazy ~~crossing stuff out~~.\n" +
        "\n" +
        "There's also [links](https://www.freecodecamp.org), and\n" +
        "> Block Quotes!\n" +
        "\n" +
        "And if you want to get really crazy, even tables:\n" +
        "\n" +
        "Wild Header | Crazy Header | Another Header?\n" +
        "------------ | ------------- | -------------\n" +
        "Your content can | be here, and it | can be here....\n" +
        "And here. | Okay. | I think we get it.\n" +
        "\n" +
        "- And of course there are lists.\n" +
        "  - Some are bulleted.\n" +
        "     - With different indentation levels.\n" +
        "        - That look like this.\n" +
        "\n" +
        "\n" +
        "1. And there are numbered lists too.\n" +
        "1. Use just 1s if you want!\n" +
        "1. And last but not least, let's not forget embedded images:\n" +
        "\n" +
        "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
    // react state
    const [displayText, setDisplayText] = useState({markedup: prevText} );

    /**
     * set the state's preview text upon change of text area.
     * @param event onChange of text area: change the preview text
     */
    function handleChange(event) {
        // markedup = marked.parse(event.target.value);
        setDisplayText({markedup: marked.parse(event.target.value)});
    }

    /**
     * return the div with the textarea and markedup preview.
     */
    return (
    <div className="App" id="app">
        <textarea name="firstName" onChange={handleChange} placeholder={leftPrev} defaultValue={leftPrev} autoFocus={true}/>
        <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(displayText.markedup)}}></div>
    </div>
  );
}

export default App;
