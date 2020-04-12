import styled from "styled-components";

const SpaceInvader = styled.article`
box-shadow: 0 0 0 1em var(--primary), 0 1em 0 1em var(--primary),
-2.5em 1.5em 0 0.5em var(--primary), 2.5em 1.5em 0 0.5em var(--primary),
-3em -3em 0 0 var(--primary), 3em -3em 0 0 var(--primary), -2em -2em 0 0 var(--primary),
2em -2em 0 0 var(--primary), -3em -1em 0 0 var(--primary), -2em -1em 0 0 var(--primary),
2em -1em 0 0 var(--primary), 3em -1em 0 0 var(--primary), -4em 0 0 0 var(--primary),
-3em 0 0 0 var(--primary), 3em 0 0 0 var(--primary), 4em 0 0 0 var(--primary),
-5em 1em 0 0 var(--primary), -4em 1em 0 0 var(--primary), 4em 1em 0 0 var(--primary),
5em 1em 0 0 var(--primary), -5em 2em 0 0 var(--primary), 5em 2em 0 0 var(--primary),
-5em 3em 0 0 var(--primary), -3em 3em 0 0 var(--primary), 3em 3em 0 0 var(--primary),
5em 3em 0 0 var(--primary), -2em 4em 0 0 var(--primary), -1em 4em 0 0 var(--primary),
1em 4em 0 0 var(--primary), 2em 4em 0 0 var(--primary);
background: var(--primary);
width: 1em;
height: 1em;
overflow: hidden;
margin: 50px 0 70px 65px;
opacity: var(--shapes-opacity);
top: 20px;
left: 800px;
position: relative;
z-index: 0;
@media screen and (min-width: 1200px) {
.space-invader {
left: 1200px;
}
}

@media screen and (max-width: 767px) {
.space-invader {
display: none;
}
}
`;

export default SpaceInvader;
