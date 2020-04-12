import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import styled from "styled-components";

const StyledEditor = styled(LiveEditor)`background: ${theme.plain.backgroundColor}; border-radius: 5px; margin-bottom: 1rem; padding: 0.75rem; border-radius: 5px; margin-bottom: 1rem; font-size: 16px; line-height: 22px;`;

const Code = ({ codeString, language, ...props }) => {
if (props['react-live']) {
return (
<LiveProvider code={codeString} noInline theme={theme}>
<StyledEditor />
<LiveError />
<LivePreview />
</LiveProvider>
);
}
return (
<Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
{({ className, style, tokens, getLineProps, getTokenProps }) => (
<pre className="code" style={style}>
{tokens.map((line, i) => (
<article {...getLineProps({ line, key: i })}>
{line.map((token, key) => (
<span {...getTokenProps({ token, key })} />
))}
</article>
))}
</pre>
)}
</Highlight>
);
};

export default Code;
